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

// [GET] ../RoomFilm/id
// Retrieve a RoomFilm by id
exports.findByID = (req, res) => {
    const id = req.params.id;
    RoomFilm.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find RoomFilm with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Error retrieving RoomFilm with id=" + id
            });
        });
};


function convertUTCDateToLocalDate(date) {
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date;
}
// [GET] ../RoomFilm/list?idTheater=&state=
// Retrieve all RoomFilms (with state or idTheater)
exports.findAll = async(req, res) => {
    const status = req.query.status;
    const idTheater = req.query.idTheater;
    const moment = convertUTCDateToLocalDate(new Date());
    var conditionUsing = {
        [Op.and]: [{
            time_start: {
                [Op.lte]: moment
            }
        }, {
            time_end: {
                [Op.gte]: moment
            }
        }]
    };
    const listAllRooms = await RoomFilm.findAll({});
    const listAllIDRooms = listAllRooms.map(r => r.id);
    //
    const listShowTimesUsing = await Showtime.findAll({ where: conditionUsing });
    let listIDRoomsUsing = listShowTimesUsing.map(r => r.room_film_id);
    let listIDRoomsAvailabile = listAllIDRooms.filter(x => !listIDRoomsUsing.includes(x));
    //
    var conditionIdRoom = status == 'using' ? {
            id: listIDRoomsUsing
        } : status == 'available' ? {
            id: listIDRoomsAvailabile
        } : null
        //
    var conditionTheater = idTheater ? {
        theater_id: idTheater
    } : null;
    //
    RoomFilm.findAll({
            where: {
                [Op.and]: [conditionIdRoom, conditionTheater]
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
                res.status(404).send({
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
                res.status(404).send({
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