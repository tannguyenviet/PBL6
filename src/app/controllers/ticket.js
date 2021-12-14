const db = require("../../utils/db");
const Ticket = db.ticket;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const QRCode = require('qrcode');
// [POST] ../ticket/register
// Create and Save a new Ticket
exports.create = async(req, res) => {

    const { price, amount, time_booking, account_id, show_time_id, location } = req.body;
    const newTicket = { price, amount, time_booking, account_id, show_time_id, location };
    //Check duplicate ticket
    const listTicketsBookedInShowtime = await Ticket.findAll({
        where: {
            [Op.and]: [{ show_time_id: show_time_id }]
        }
    });
    const listLocationsBookedInShowtime = listTicketsBookedInShowtime.map(r => r.location).join(',').split(',');
    const listNewReservations = location.split(',');
    const listDuplicates = listNewReservations.filter(r => listLocationsBookedInShowtime.includes(r))
    if (listDuplicates.length > 0) {
        return res.status(400).send({
            message: `Ticket: ${listDuplicates} already exists in showtime`
        });
    }

    //Before - Save account in the database
    Ticket.beforeCreate(async(newTicket, options) => {
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const ticketHash = await bcrypt.hash(process.env.JWT_TICKET_SECRET, salt);
        const jwtToken = jwt.sign({ account_id: newTicket.account_id, show_time_id: newTicket.show_time_id },
            process.env.JWT_SECRET
        );
        newTicket.ticketHash = ticketHash;
        newTicket.ticketQR = await QRCode.toDataURL(jwtToken);
    });

    // Save Ticket in the database
    Ticket.create(newTicket)
        .then(data => data.dataValues)
        .then(data => {
            delete data.ticketHash;
            return res.send(data);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            });
        });
};

// [GET] ../ticket/location/list?idShowtime=
// Retrieve all ticket-locations of a showtime by showtimeId
exports.findLocationsByShowtimeId = (req, res) => {
    const id = req.query.idShowtime;
    Ticket.findAll({
            where: {
                [Op.and]: [{ show_time_id: id }]
            }
        })
        .then(data => {
            const listLocationsBookedInShowtime = data.map(r => r.location).join(',').split(',');
            return data.length > 0 ? res.send(listLocationsBookedInShowtime) : res.send([]);

        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// [GET] ../ticket/revenue?idShowtime=
// Count revenue of a showtime by showtimeId
exports.countRevenueByShowtimeId = (req, res) => {
    const id = req.query.idShowtime;
    Ticket.findAll({
            where: {
                [Op.and]: [{ show_time_id: id }]
            }
        })
        .then(data => {
            if (data.length > 0) {
                dataAmount = data.map(r => {
                    return r.amount
                })
                dataRevenue = data.map(r => {
                    return r.price
                })
                const revenue = dataRevenue.reduce((a, b) => { return a + b })
                const amount = dataAmount.reduce((a, b) => { return a + b })
                return res.status(200).send({
                    amount_ticket: amount,
                    revenue: revenue
                });
            } else {
                return res.status(404).send({
                    message: `Cannot found any ticket with idShowtime = ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};
exports.findByAccountId = (req, res) => {
    const id = req.params.id;
    Ticket.findAll({
            attributes: ['id', 'amount', 'price', 'time_booking', 'show_time_id', 'location', 'ticketQR'],
            where: {
                [Op.and]: [{ account_id: id }]
            }
        })
        .then(data => {
            if (data.length > 0) {
                delete data.ticketHash;
                return res.status(200).send(data);
            } else {
                return res.status(404).send({
                    message: `Cannot find any ticket with account_id = ${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// [DELETE] ../ticket/id
// Delete a Ticket with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Ticket.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Ticket was deleted successfully!"
                });
            } else {
                res.status(404).send({
                    message: `Cannot delete Ticket with id = ${id}.Maybe Ticket was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};