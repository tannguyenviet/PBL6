const db = require("../../utils/db");
const RoomFilm = db.room_film;
const Showtime = db.show_time;
const Op = db.Sequelize.Op;

// [POST] ../RoomFilm/create
// Create and Save a new RoomFilm
// exports.create = async(req, res) => {

//     const { name, address, RoomFilms } = req.body;
//     const newRoomFilm = { name, address, RoomFilms };
//     const listRoomFilmBefore = await RoomFilm.findAll({
//         where: {
//             [Op.and]: [{ name: name }]
//         }
//     });
//     if (listRoomFilmBefore.length > 0) {
//         return res.status(400).send({
//             message: "RoomFilm with name already exists!"
//         });
//     }
//     //res.json(newRoomFilm)
//     // Save RoomFilm in the database
//     RoomFilm.create(newRoomFilm)
//         .then(data => {
//             return res.send(data);
//         })
//         .catch(err => {
//             return res.status(500).send({
//                 message: err.message || "Some error occurred while creating the RoomFilm."
//             });
//         });
// };

// [GET] ../RoomFilm/list 
// Retrieve all RoomFilms (with state or idTheater)
exports.findAll = async(req, res) => {
    const status = req.query.status;
    const idTheater = req.query.idTheater;
    const moment = new Date();
    var conditionTheater = idTheater ? {
        theater_id: idTheater
    } : null;
    var conditionStatus = status == 'using' ? {
            [Op.and]: [{
                time_start: {
                    [Op.lte]: moment
                }
            }, {
                time_end: {
                    [Op.gte]: moment
                }
            }]
        } : status == 'available' ? {
            [Op.or]: [{
                time_start: {
                    [Op.gte]: moment
                }
            }, {
                time_end: {
                    [Op.lte]: moment
                }
            }]
        } :
        null;
    //
    const listShowTimes = await Showtime.findAll({ where: conditionStatus });
    let listRoomsOfConditionStatus = listShowTimes.map(r => r.room_film_id);
    //
    const listAllShowtime = await Showtime.findAll({});
    const listRoomsInShowtime = listAllShowtime.map(r => r.room_film_id);
    //
    const listRoomsOfATheater = await RoomFilm.findAll({});
    //
    if (status != 'using') {
        const roomHasNoShowtime = listRoomsOfATheater.filter(x => !listRoomsInShowtime.includes(x.id)).map(r => r.id)
        listRoomsOfConditionStatus = listRoomsOfConditionStatus.concat(roomHasNoShowtime)
    }
    if (listRoomsOfConditionStatus.length > 0) {
        console.log(listRoomsOfConditionStatus)
        RoomFilm.findAll({
                where: {
                    [Op.and]: [{
                        id: listRoomsOfConditionStatus
                    }, conditionTheater]
                }
            })
            .then(data => {
                return res.send(data);
            })
            .catch(err => {
                return res.status(500).send({
                    message: "Error retrieving all RoomFilms"
                });
            });
    } else {
        return res.send([])
    }
};

// [PUT] ../RoomFilm/id
// Update a RoomFilm by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;
    const { name, column, row } = req.body
    const newRoomFilm = { name, column, row };
    RoomFilm.update(newRoomFilm, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "RoomFilm was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update RoomFilm with id=${id}. Maybe nothing changed or RoomFilm was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating RoomFilm with id=" + id
            });
        });
};

// [DELETE] ../RoomFilm/id
// Delete a RoomFilm with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    RoomFilm.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "RoomFilm was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete RoomFilm with id=${id}. Maybe RoomFilm was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete RoomFilm with id=" + id
            });
        });
};