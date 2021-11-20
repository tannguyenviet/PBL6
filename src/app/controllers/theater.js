const db = require("../../utils/db");
const Theater = db.theater;
const Op = db.Sequelize.Op;

// [POST] ../Theater/register
// Create and Save a new Theater
exports.create = async(req, res) => {

    const { time_start, time_end, film_cityName, price_type_cityName, room_film_cityName } = req.body;
    const newTheater = { time_start, time_end, film_cityName, price_type_cityName, room_film_cityName };
    const listTheaterBefore = await Theater.findAll({
        where: {
            [Op.and]: [{ film_cityName: film_cityName }]
        }
    });
    //res.json(newTheater)
    // Save Theater in the database
    Theater.create(newTheater)
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the Theater."
            });
        });
};

// [GET] ../Theater/search?cityName=""
// Find all Theaters with a specific cityName
exports.searchWithCityName = (req, res) => {
    const cityName = req.query.cityName;
    Theater.findAll({
            attributes: ['id'],
            where: {
                [Op.and]: [{ city: cityName }]
            }
        })
        .then(data => {
            if (data.length > 0) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find any theaters with cityName=${cityName}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving theaters with cityName=" + cityName
            });
        });
};

// [GET] ../theater/city/list
// Retrieve all City
exports.findAllCity = (req, res) => {
    Theater.findAll({
            attributes: ['city'],
            group: ['city']
        })
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            return res.status(500).send({
                message: "Error retrieving all City"
            });
        });
};

// [PUT] ../Theater/id
// Update a Theater by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Theater.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Theater was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Theater with id=${id}. Maybe Theater was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Theater with id=" + id
            });
        });
};

// [DELETE] ../Theater/id
// Delete a Theater with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Theater.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Theater was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Theater with id=${id}. Maybe Theater was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Theater with id=" + id
            });
        });
};