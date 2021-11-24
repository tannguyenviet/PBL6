const db = require("../../utils/db");
const Ticket = db.ticket;
const Op = db.Sequelize.Op;

// [POST] ../ticket/register
// Create and Save a new Ticket
exports.create = async(req, res) => {

    const { price, time_booking, account_id, show_time_id, row, column } = req.body;
    const newTicket = { price, time_booking, account_id, show_time_id, row, column };
    const listTicketsBookedInShowtime = await Ticket.findAll({
        where: {
            [Op.and]: [{ show_time_id: show_time_id }]
        }
    });
    const existTicket = listTicketsBookedInShowtime.find(r => r.row == row && r.column == column)
    if (existTicket)
        return res.status(400).send({
            message: "Ticket already exists in showtime"
        });
    // Save Ticket in the database
    Ticket.create(newTicket)
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the Ticket."
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
            if (data.length > 0) {
                data = data.map(r => {
                    return {
                        id: r.id,
                        row: r.row,
                        column: r.column
                    }
                })
                return res.send(data);
            } else {
                return res.status(404).send({
                    message: `Cannot find any ticket-locations with idShowtime=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving tutorials."
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
                    dataRevenue = data.map(r => {
                        return r.price
                    })
                    const revenue = dataRevenue.reduce((a, b) => { return a + b })
                    return res.status(200).send({
                        revenue: revenue
                    });
                } else {
                    return res.status(404).send({
                        message: `Cannot count revenue with idShowtime=${id}.`
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving tutorials."
                });
            });
    }
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
                res.send({
                    message: `Cannot delete Ticket with id=${id}. Maybe Ticket was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Ticket with id=" + id
            });
        });
};