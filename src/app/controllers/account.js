const db = require("../../utils/db");
const Account = db.account;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");

// [POST]: /account/register -- Create and Save a new account
exports.register = async(req, res) => {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({
            message: "username or password can not be empty!"
        });
        return;
    };
    // 
    const { username, password, name, phone, Username, address, birthday, gender, role_id } = req.body;
    // check alreadyExistsUser
    const alreadyExistsUser = await Account.findOne({ where: { username } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );
    if (alreadyExistsUser) {
        return res.status(409).json({ message: "User with username already exists!" });
    }

    const newAccount = { username, password, name, phone, Username, address, birthday, gender, role_id };

    // Save account in the database
    Account.create(newAccount)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while Register account."
            });
        });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    Account.findOne({ where: { username } })
        .then(account => {
            if (!account)
                return res
                    .status(400)
                    .json({ message: "Username or password does not match!" });

            if (account.password !== password)
                return res
                    .status(400)
                    .json({ message: "Username or password does not match!" });

            const jwtToken = jwt.sign({ id: account.id, username: account.username },
                process.env.JWT_SECRET
            );

            //const jwtToken = { id: account.id, username: account.username };
            res.json({ message: "Welcome Back!", token: jwtToken });
        })
        .catch(
            (err) => {
                res.status(500).send({
                    message: err.message || "Some error occurred while Login."
                });
            }
        );


}

// Retrieve all accounts from the database.
exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? {
        title: {
            [Op.like]: `%${title}%`
        }
    } : null;

    Account.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving accounts."
            });
        });
};

// Find a single account with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Account.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find account with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving account with id=" + id
            });
        });
};

// Update a account by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Account.update(req.body, {
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "account was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update account with id=${id}. Maybe account was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating account with id=" + id
            });
        });
};

// Delete a account with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Account.destroy({
            where: { id: id }
        })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "account was deleted successfully!"
                });
            } else {
                res.send({
                    message: `Cannot delete account with id=${id}. Maybe account was not found!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete account with id=" + id
            });
        });
};

// Delete all accounts from the database.
exports.deleteAll = (req, res) => {

};

// Find all published accounts
exports.findAllPublished = (req, res) => {
    Account.findAll({ where: { published: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving accounts."
            });
        });
};