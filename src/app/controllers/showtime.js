const db = require("../../utils/db");
const Showtime = db.show_time;
const RoomFilm = db.room_film;
const Op = db.Sequelize.Op;

// [POST] ../showtime/create
// Create and Save a new Showtime
exports.create = async(req, res) => {
    const { time_start, time_end, film_id, price_type_id, room_film_id } =
    req.body;
    const newShowtime = {
        time_start,
        time_end,
        film_id,
        price_type_id,
        room_film_id,
    };
    const listShowtimeBefore = await Showtime.findAll({
        where: {
            [Op.and]: [{ film_id: film_id }],
        },
    });
    //res.json(newShowtime)
    // Save Showtime in the database
    Showtime.create(newShowtime)
        .then((data) => {
            return res.send(data);
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the Showtime.",
            });
        });
};

// [GET] ../showtime/id
// Find a single Showtime with an id
// exports.findOne = (req, res) => {
//     const id = req.params.id;
//     Showtime.findByPk(id)
//         .then(data => {
//             if (data) {
//                 res.send(data);
//             } else {
//                 res.status(200).send({
//                     message: `Cannot find Showtime with id=${id}.`
//                 });
//             }
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Error retrieving Showtime with id=" + id
//             });
//         });
// };

// [GET] ../showtime/search?idFilm=""&idTheater=""&date=""
// Retrieve all showtime belong to a film having a idTheater and a specific date for Admin
exports.findAllWithIdFilmAndIdTheaterAndDateForAdmin = async(req, res) => {
    const idFilm = req.query.idFilm;
    const idTheater = req.query.idTheater;
    let date1 = null;
    let date2 = null;
    if (req.query.date) {
        date1 = new Date(req.query.date);
        date2 = new Date(req.query.date);
        date2.setDate(date2.getDate() + 1);
    }
    //
    const listShowTimes = await Showtime.findAll({
        where: idFilm && date1 ? {
            [Op.and]: [
                { film_id: idFilm },
                {
                    time_start: {
                        [Op.between]: [date1, date2],
                    },
                },
            ],
        } : date1 ? {
            [Op.and]: [{
                time_start: {
                    [Op.between]: [date1, date2],
                },
            }, ],
        } : idFilm ? {
            [Op.and]: [{ film_id: idFilm }],
        } : {},
    });
    if (!idTheater) {
        return res.send(listShowTimes);
    }
    // get roomfilmsIDs of a theater
    const listTheaterRoomIDs = await RoomFilm.findAll({
        attributes: ["id"],
        where: {
            [Op.and]: [{ theater_id: idTheater }],
        },
    });
    const listRoomIDs = listTheaterRoomIDs.map((r) => r.id);
    // get roomfilmsIDs of listFilms
    const dataRoomIds = listShowTimes.map((r) => r.room_film_id);
    //
    const similarRoomIds = listRoomIDs.filter((x) => dataRoomIds.includes(x));

    if (similarRoomIds.length > 0) {
        return res.send(
            listShowTimes.filter((r) => similarRoomIds.includes(r.room_film_id))
        );
    } else
        return res.status(200).send({
            message: `Cannot find Showtime with idTheater=${idTheater}, idFilm=${idFilm}, date=${
        date1 ? date1.getDate() : null
      }.`,
        });
};

exports.findById = (req, res) => {
    const id = req.params.id;
    Showtime.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(200).send({
                    message: `Cannot find Showtime with id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error retrieving Showtime with id=" + id,
            });
        });
};

// [GET] ../showtime/search?idFilm=""&idTheater=""&date=""
// Retrieve all showtime belong to a film having a idTheater and a specific date
exports.findAllWithIdFilmAndIdTheaterAndDate = async(req, res) => {
    const idFilm = req.query.idFilm;
    const idTheater = req.query.idTheater;
    let date1 = null;
    let date2 = null;
    if (req.query.date) {
        date1 = new Date(req.query.date);
        date2 = new Date(req.query.date);
        date2.setDate(date2.getDate() + 1);
    }

    //
    const listTheaterRoomIDs = await RoomFilm.findAll({
        attributes: ["id"],
        where: {
            [Op.and]: [{ theater_id: idTheater }],
        },
    });
    const listRoomIDs = listTheaterRoomIDs.map((r) => r.id);
    //
    const listShowTimes = await Showtime.findAll({
        where: idFilm && date1 ? {
            [Op.and]: [
                { film_id: idFilm },
                {
                    time_start: {
                        [Op.between]: [date1, date2],
                    },
                },
            ],
        } : date1 ? {
            [Op.and]: [{
                time_start: {
                    [Op.between]: [date1, date2],
                },
            }, ],
        } : idFilm ? {
            [Op.and]: [{ film_id: idFilm }],
        } : {},
    });
    const dataRoomIds = listShowTimes.map((r) => r.room_film_id);
    //
    const similarRoomIds = listRoomIDs.filter((x) => dataRoomIds.includes(x));

    if (similarRoomIds.length > 0) {
        return res.send(
            listShowTimes.filter((r) => similarRoomIds.includes(r.room_film_id))
        );
    } else
        return res.status(200).send({
            message: `Cannot find Showtime with idTheater=${idTheater}, idFilm=${idFilm}, date=${
        date1 ? date1.getDate() : null
      }.`,
        });
    // Showtime.findAll({
    //         where: {
    //             [Op.and]: [{ film_id: idFilm },
    //                 [{ room_film_id: listTheaterRoomIDs }]
    //             ]
    //         }
    //     })
    //     .then(data => {
    //         if (data.length > 0) {
    //             return res.send(data);
    //         } else {
    //             return res.status(200).send({
    //                 message: `Cannot find any Showtime with idFilm=${idFilm}.`
    //             });
    //         }
    //     })
    //     .catch(err => {
    //         return res.status(500).send({
    //             message: "Error retrieving Showtime with idFilm=" + idFilm
    //         });
    //     });
};

// [PUT] ../showtime/id
// Update a Showtime by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Showtime.update(req.body, {
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Showtime was updated successfully.",
                });
            } else {
                res.status(200).send({
                    message: `Cannot update Showtime with id=${id}. Maybe Showtime was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error updating Showtime with id=" + id,
            });
        });
};

// [DELETE] ../showtime/id
// Delete a Showtime with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Showtime.destroy({
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Showtime was deleted successfully!",
                });
            } else {
                res.status(200).send({
                    message: `Cannot delete Showtime with id=${id}. Maybe Showtime was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete Showtime with id=" + id,
            });
        });
};