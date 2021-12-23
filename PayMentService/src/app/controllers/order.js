var config = require('../../config/payment.json');

function sortObject(obj) {
    var sorted = {};
    var str = [];
    var key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            str.push(encodeURIComponent(key));
        }
    }
    str.sort();
    for (key = 0; key < str.length; key++) {
        sorted[str[key]] = encodeURIComponent(obj[str[key]]).replace(/%20/g, "+");
    }
    return sorted;
}
exports.createPaymentUrl = (req, res, next) => {
    var ipAddr = req.headers['x-forwarded-for'] ||
        req.connection.remoteAddress ||
        req.socket.remoteAddress ||
        req.connection.socket.remoteAddress;

    var dateFormat = require('dateformat');
    var tmnCode = config.vnp_TmnCode;
    var secretKey = config.vnp_HashSecret;
    var vnpUrl = config.vnp_Url;
    //
    var returnUrl = "http://" + req.headers.host + config.vnp_ReturnUrl;
    //
    var date = new Date();
    var createDate = dateFormat(date, 'yyyymmddHHmmss');
    var orderId = dateFormat(date, 'HHmmss');
    //var amount = req.body.amount;
    //var bankCode = req.body.bankCode;
    // var orderInfo = req.body.orderDescription;
    // var orderType = req.body.orderType;
    //var locale = req.body.language;
    const { price, amount, time_booking, account_id, show_time_id, location } = req.body
    const sum = amount;
    var bankCode = "NCB";
    var locale = "vn"
    if (locale === null || locale === '') {
        locale = 'vn';
    }
    var currCode = 'VND';
    var vnp_Params = {};
    vnp_Params['vnp_Version'] = '2.1.0';
    vnp_Params['vnp_Command'] = 'pay';
    vnp_Params['vnp_TmnCode'] = tmnCode;
    // vnp_Params['vnp_Merchant'] = ''
    vnp_Params['vnp_Locale'] = locale;
    vnp_Params['vnp_CurrCode'] = currCode;
    vnp_Params['vnp_TxnRef'] = orderId;
    //
    vnp_Params['vnp_OrderInfo'] = `MovieTicket_${sum}_${time_booking}_${account_id}_${show_time_id}_${location}`;
    vnp_Params['vnp_OrderType'] = "billpayment";
    vnp_Params['vnp_Amount'] = price * 100;
    //
    vnp_Params['vnp_ReturnUrl'] = returnUrl;
    vnp_Params['vnp_IpAddr'] = ipAddr;
    vnp_Params['vnp_CreateDate'] = createDate;
    if (bankCode !== null && bankCode !== '') {
        vnp_Params['vnp_BankCode'] = bankCode;
    }

    vnp_Params = sortObject(vnp_Params);

    var querystring = require('qs');
    var signData = querystring.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
    vnp_Params['vnp_SecureHash'] = signed;
    vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: false });
    res.send(vnpUrl);
}


const db = require("../../utils/db");
const Ticket = db.ticket;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const QRCode = require('qrcode');

function generateTicketHash(ticket) {
    var ticketParams = {};
    ticketParams['id_account'] = ticket.account_id;
    ticketParams['id_showtime'] = ticket.show_time_id;
    ticketParams['location'] = ticket.location;
    // ticketParams['vnp_Merchant'] = ''
    ticketParams['price'] = ticket.price;
    ticketParams['time_booking'] = ticket.time_booking;
    ticketParams['amount'] = ticket.amount;
    ticketParams = sortObject(ticketParams);

    var querystring = require('qs');
    var signData = querystring.stringify(ticketParams, { encode: false });
    var crypto = require("crypto");
    var hmac = crypto.createHmac("sha512", process.env.JWT_TICKET_SECRET);
    var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");
    ticketParams['vnp_SecureHash'] = signed;
    return signed
}
exports.returnPaymentUrl = async(req, res, next) => {
    var vnp_Params = req.query;

    var secureHash = vnp_Params['vnp_SecureHash'];

    delete vnp_Params['vnp_SecureHash'];
    delete vnp_Params['vnp_SecureHashType'];

    vnp_Params = sortObject(vnp_Params);

    var tmnCode = config.vnp_TmnCode;
    var secretKey = config.vnp_HashSecret;

    var querystring = require('qs');
    var signData = querystring.stringify(vnp_Params, { encode: false });
    var crypto = require("crypto");
    var hmac = crypto.createHmac("sha512", secretKey);
    var signed = hmac.update(new Buffer(signData, 'utf-8')).digest("hex");

    if (secureHash === signed && vnp_Params['vnp_ResponseCode'] === '00') {
        const infoTicket = vnp_Params['vnp_OrderInfo'].split("_");
        const ticket = {
            "price": vnp_Params['vnp_Amount'] / 100,
            "amount": infoTicket[1],
            "time_booking": decodeURIComponent(infoTicket[2]),
            "account_id": infoTicket[3],
            "show_time_id": infoTicket[4],
            "location": decodeURIComponent(infoTicket[5])
        }
        const listTicketsBookedInShowtime = await Ticket.findAll({
            where: {
                [Op.and]: [{ show_time_id: ticket.show_time_id }]
            }
        });
        const listLocationsBookedInShowtime = listTicketsBookedInShowtime.map(r => r.location).join(',').split(',');
        const listNewReservations = ticket.location.split(',');
        const listDuplicates = listNewReservations.filter(r => listLocationsBookedInShowtime.includes(r))
        if (listDuplicates.length > 0) {
            return res.status(400).send({
                message: `Ticket: ${listDuplicates} already exists in showtime`
            });
        }

        //Before - Save account in the database
        Ticket.beforeCreate(async(ticket, options) => {
            ticket.ticketHash = generateTicketHash(ticket);
            ticket.ticketQR = await QRCode.toDataURL(ticket.ticketHash);
        });
        // Save Tet in the database
        Ticket.create(ticket)
            .then(data => data.dataValues)
            .then(data => {
                delete data.ticketHash;
                return res.render('returnPayment')

            })
            .catch(err => {
                return res.status(500).send({
                    message: err.message
                });
            })
    } else {
        res.status(404).send("Error while payment")
    }
}