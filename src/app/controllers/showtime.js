const db = require("../../utils/db");
const Showtime = db.show_time;
const Op = db.Sequelize.Op;

// [POST] ../showtime/register
// Create and Save a new Showtime
exports.create = async(req, res) => {

    const { time_start, time_end, film_id, price_type_id, room_film_id } = req.body;
    const newShowtime = { time_start, time_end, film_id, price_type_id, room_film_id };
    const listShowtimeBefore = await Showtime.findAll({
        where: {
            [Op.and]: [{ film_id: film_id }]
        }
    });
    //res.json(newShowtime)
    // Save Showtime in the database
    Showtime.create(newShowtime)
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the Showtime."
            });
        });
};

// [GET] ../showtime/id
// Find a single Showtime with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Showtime.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Showtime with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Showtime with id=" + id
            });
        });
};

// [GET] ../showtime/film/id
// Retrieve all showtime belong to a film
exports.findAllWithIdFilm = (req, res) => {
    const id = req.params.id;
    Showtime.findAll({
            where: {
                [Op.and]: [{ film_id: id }]
            }
        })
        .then(data => {
            if (data.length > 0) {
                return res.send(data);
            } else {
                return res.status(404).send({
                    message: `Cannot find any Showtime with idFilm=${id}.`
                });
            }
        })
        .catch(err => {
            return res.status(500).send({
                message: "Error retrieving Showtime with idFilm=" + id
            });
        });
};

// [PUT] ../showtime/id
// Update a Showtime by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Showtime.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Showtime was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Showtime with id=${id}. Maybe Showtime was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Showtime with id=" + id
            });
        });
};

// [DELETE] ../showtime/id
// Delete a Showtime with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Showtime.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Showtime was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Showtime with id=${id}. Maybe Showtime was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Showtime with id=" + id
            });
        });
};