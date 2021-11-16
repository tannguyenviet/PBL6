const db = require("../../utils/db");
const Film = db.film;
const Op = db.Sequelize.Op;

const {
    listFilmsIds,
    getListDetailFilms
} = require('../../utils/createFilms')

// [GET] ../film/create 
// Import nowPlaying Film from Create_films.js and save in database
exports.create = (req, res) => {
    (async() => {
        const listIds = await listFilmsIds();
        const listFilms = await getListDetailFilms(listIds);
        // Create 
        const dataFilms = await Film.findAll().catch(
            (err) => {
                console.log("Error: ", err);
            }
        );
        const dataFilmsIds = dataFilms.map(r => r.idFilmsOnWeb)
        const differenceFilms = listFilms.filter(x => !dataFilmsIds.includes(x.idFilmsOnWeb));
        if (differenceFilms.length > 0) {
            Film.bulkCreate(differenceFilms)
                .then(data => {
                    res.json(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Film."
                    });
                });
        } else {
            res.status(200).send({
                message: "Nothing new films to add into DB."
            });
        }

    })();
};

// [GET] ../film/list
// Retrieve all film from the database.
exports.findAll = (req, res) => {
    Film.findAll()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving film."
            });
        });
};

// [GET] ../film/now-playing
// Retrieve all film 14 days before today
exports.findNowPlaying = (req, res) => {
    const twoWeeksAgo = new Date(new Date().setDate(new Date().getDate() - 14));
    Film.findAll({
            where: {
                time_release: {
                    [Op.between]: [twoWeeksAgo, new Date()]
                }
            }
        })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving film."
            });
        });
};

// [GET] ../film/up-coming
// Retrieve all film 14 days from today 
exports.findUpComing = (req, res) => {
    const twoWeeksFromNow = new Date(new Date().setDate(new Date().getDate() + 14));
    Film.findAll({
            where: {
                time_release: {
                    [Op.between]: [new Date(), twoWeeksFromNow]
                }
            }
        })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving film."
            });
        });
}

// [GET] ../film/id
// Find a single Film with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Film.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Film with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Film with id=" + id
            });
        });
};

// [PUT] ../film/id
// Update a Film by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Film.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Film was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Film with id=${id}. Maybe Film was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Film with id=" + id
            });
        });
};

// [DELETE] ../film/id
// Delete a Film with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Film.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Film was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete Film with id=${id}. Maybe Film was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Film with id=" + id
            });
        });
};