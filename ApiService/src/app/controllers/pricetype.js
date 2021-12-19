const db = require("../../utils/db");
const PriceType = db.price_type;
const Op = db.Sequelize.Op;

// [POST] ../PriceType/create
// Create and Save a new PriceType
// exports.create = async(req, res) => {

//     const { name, address, PriceTypes } = req.body;
//     const newPriceType = { name, address, PriceTypes };
//     const listPriceTypeBefore = await PriceType.findAll({
//         where: {
//             [Op.and]: [{ name: name }]
//         }
//     });
//     if (listPriceTypeBefore.length > 0) {
//         return res.status(400).send({
//             message: "PriceType with name already exists!"
//         });
//     }
//     //res.json(newPriceType)
//     // Save PriceType in the database
//     PriceType.create(newPriceType)
//         .then(data => {
//             return res.send(data);
//         })
//         .catch(err => {
//             return res.status(500).send({
//                 message: err.message || "Some error occurred while creating the PriceType."
//             });
//         });
// };

// [GET] ../PriceType/list
// Retrieve all PriceTypes
exports.findAll = (req, res) => {
    PriceType.findAll({})
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            return res.status(500).send({
                message: err.message
            });
        });
};


// [GET] ../PriceType/id
// Retrieve a PriceTypes by id
exports.findByID = (req, res) => {
    const id = req.params.id;

    PriceType.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find PriceType with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// [PUT] ../PriceType/id
// Update a PriceType by the id in the request
exports.update = async(req, res) => {

    const id = req.params.id;

    const pricetype = await PriceType.findByPk(id)
    if (!pricetype) {
        return res.status(404).send({ message: "This pricetype not found" })
    }

    const { description, price } = req.body
    const newPriceType = { description, price };
    PriceType.update(newPriceType, {
            where: { id: id }
        })
        .then(num => {
            return res.send({
                message: "PriceType was updated successfully."
            });

        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

// [DELETE] ../PriceType/id
// Delete a PriceType with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    PriceType.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "PriceType was deleted successfully!"
                });
            } else {
                res.status(404).send({
                    message: `Cannot delete PriceType with id=${id}. Maybe PriceType was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};