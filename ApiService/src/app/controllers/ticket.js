const db = require("../../utils/db");
const Ticket = db.ticket;
const Film = db.film;
const Showtime = db.show_time;
const RoomFilm = db.room_film;
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
    const condition = id ? { show_time_id: id } : null;
    Ticket.findAll({
            where: {
                [Op.and]: [condition]
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

// [GET] ../ticket/revenue?idTheater=&date=?&idFilm=?
// Count revenue of a showtime by showtimeId
const dateformat = require('dateformat');
exports.countRevenue = async(req, res) => {
    try {
        const idFilm = req.query.idFilm;
        const idTheater = req.query.idTheater;
        let dateRange = req.query.dateRange.split("_");
        let dateStart = new Date(dateRange[0]);
        let dateEnd = new Date(dateRange[1]);
        dateEnd.setDate(dateEnd.getDate() + 1);
        // let date1 = null;
        // let date2 = null;
        // if (req.query.date) {
        //     date1 = new Date(req.query.date);
        //     date2 = new Date(req.query.date);
        //     date2.setDate(date2.getDate() + 1);
        // }
        // 
        var listShowtimeId = [];
        //
        var listShowTimes = await Showtime.findAll({
            raw: true,
            where: idFilm && dateRange ? {
                [Op.and]: [
                    { film_id: idFilm },
                    {
                        time_start: {
                            [Op.between]: [dateStart, dateEnd],
                        },
                    },
                ],
            } : dateRange ? {
                [Op.and]: [{
                    time_start: {
                        [Op.between]: [dateStart, dateEnd],
                    },
                }, ],
            } : idFilm ? {
                [Op.and]: [{ film_id: idFilm }],
            } : {},
        });
        //
        if (!idTheater) {
            //listShowtimeId = listShowTimes.map(r => r.id);
        } else {
            // get RoomFilmsIDs of a theater
            const listTheaterRoomIDs = await RoomFilm.findAll({
                attributes: ["id"],
                where: {
                    [Op.and]: [{ theater_id: idTheater }],
                },
            });
            const listRoomIDs = listTheaterRoomIDs.map((r) => r.id);
            // get RoomFilmsIDs of listFilms
            const dataRoomIds = listShowTimes.map((r) => r.room_film_id);
            //
            const similarRoomIds = listRoomIDs.filter((x) => dataRoomIds.includes(x));

            //
            listShowTimes = listShowTimes.filter((r) => similarRoomIds.includes(r.room_film_id))
        }

        var getDaysArray = function(start, end) {
            var i = 0;
            for (var arr = [], dt = new Date(start); dt < end; dt.setDate(dt.getDate() + 1)) {
                arr.push(new Date(dt));
            }
            return arr;
        };
        const arrayDate = getDaysArray(dateStart, dateEnd)
        res.send(await getRevenueByDateRange(arrayDate, listShowTimes))
    } catch (err) {
        return res.status(500).send({
            message: err.message
        });
    }

};

async function getRevenueByDateRange(arrayDate, listShowTimes) {
    var listRevenueByEveryday = [];
    for (var date of arrayDate) {
        const dateLess = new Date(date);
        const dateGreater = new Date(date.setDate(date.getDate() + 1));
        const listIDsShowtimeByEveryDay = listShowTimes.filter(r => r.time_start >= dateLess && r.time_start < dateGreater).map(r => r.id)
        const item = await Ticket.findAll({
                where: {
                    [Op.and]: [{ show_time_id: listIDsShowtimeByEveryDay }]
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
                    return {
                        date: dateLess,
                        amount_ticket: amount,
                        revenue: revenue
                    }
                } else {
                    return {
                        date: dateLess,
                        amount_ticket: 0,
                        revenue: 0
                    };
                }
            })
            .catch(err => { throw (err) });
        listRevenueByEveryday.push(item)
    }
    return listRevenueByEveryday
}

const convertUTCDateToLocalDate = require('../../utils/convertUTCDateToLocalDate')
const Theater = db.theater
exports.findByAccountId = async(req, res) => {
    const id = req.params.id;
    var tickets = await Ticket.findAll({
        raw: true,
        attributes: ['id', 'amount', 'price', 'time_booking', 'show_time_id', 'location', 'ticketQR'],
        where: {
            [Op.and]: [{ account_id: id }]
        }
    });
    if (tickets.length > 0) {
        const unresolvedPromises = tickets.map(r => {
            return Showtime.findByPk(r.show_time_id).then(data => {
                return data
            });

        })
        const ShowTimeResults = await Promise.all(unresolvedPromises)
        for (const ticket of tickets) {
            const showtime = ShowTimeResults.find(showtime => showtime.id == ticket.show_time_id)
            if (showtime) {
                //
                const roomfilm = await RoomFilm.findByPk(showtime.room_film_id)
                const theater_id = roomfilm.theater_id;
                const theater = await Theater.findByPk(theater_id)
                ticket.theater = theater.name;
                ticket.city = theater.city;
                //
                const dateStrStart = showtime.time_start.toISOString();
                const dateStrEnd = showtime.time_end.toISOString();
                ticket.datetime = showtime.time_start;
                ticket.date = dateStrStart.split("T")[0]
                ticket.time_start = dateStrStart.split("T")[1]
                ticket.time_end = dateStrEnd.split("T")[1]
                const film = await Film.findByPk(showtime.film_id)
                ticket.film_name = film.name;
            }
        }
        delete tickets.ticketHash;
        tickets = tickets.sort(function(less, greater) {
            return new Date(greater.datetime) - new Date(less.datetime);
        });
    }
    return res.status(200).send(tickets);
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