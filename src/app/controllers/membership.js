const db = require("../../utils/db");
const Membership = db.membership;
const Op = db.Sequelize.Op;

// [POST] ../Membership/create
// Create and Save a new Membership
// exports.create = async(req, res) => {

//     const { name, address, Membership } = req.body;
//     const newMembership = { name, address, Membership };
//     const listMembershipBefore = await Membership.findAll({
//         where: {
//             [Op.and]: [{ name: name }]
//         }
//     });
//     if (listMembershipBefore.length > 0) {
//         return res.status(400).send({
//             message: "Membership with name already exists!"
//         });
//     }
//     //res.json(newMembership)
//     // Save Membership in the database
//     Membership.create(newMembership)
//         .then(data => {
//             return res.send(data);
//         })
//         .catch(err => {
//             return res.status(500).send({
//                 message: err.message || "Some error occurred while creating the Membership."
//             });
//         });
// };

// [GET] ../Membership/list
// Retrieve all Membership
exports.findAll = (req, res) => {
    Membership.findAll({})
        .then(data => {
            return res.send(data);
        })
        .catch(err => {
            return res.status(500).send({
                message: "Error retrieving all Membership"
            });
        });
};

// [PUT] ../Membership/id
// Update a Membership by the id in the request
exports.update = (req, res) => {

    const id = req.params.id;
    const { rank_number, point_total, point_exchange } = req.body
    const newMembership = { rank_number, point_total, point_exchange };
    Membership.update(newMembership, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Membership was updated successfully."
                });
            } else {
                res.status(404).send({
                    message: `Cannot update Membership with id=${id}. Maybe nothing changed or Membership was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Membership with id=" + id
            });
        });
};

// [DELETE] ../Membership/id
// Delete a Membership with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Membership.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Membership was deleted successfully!"
                });
            } else {
                res.status(404).send({
                    message: `Cannot delete Membership with id=${id}. Maybe Membership was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Membership with id=" + id
            });
        });
};