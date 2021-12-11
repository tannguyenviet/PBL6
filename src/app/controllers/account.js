const db = require("../../utils/db");
const Account = db.account;
const Membership = db.membership;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
//
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bcrypt = require('bcrypt');

// [POST] ../account/register
// Create and Save a new account
exports.register = async(req, res) => {
    if (!req.body.username || !req.body.password) {
        return res.status(400).send({
            message: "username or password can not be empty!",
        });
    }
    // check alreadyExistsUserr
    const alreadyExistsUser = await Account.findAll({
        where: {
            [Op.or]: [{ username: req.body.username }, { email: req.body.email }],
        },
    }).catch((err) => {
        return res.status(500).send({
            message: err.message || "Some error occurred while findAll account.",
        });
    });
    if (alreadyExistsUser.length > 0) {
        return res
            .status(400)
            .json({ message: "User with username or email already exists!" });
    }
    const {
        username,
        password,
        name,
        phone,
        email,
        address,
        birthday,
        gender,
        role_id,
    } = req.body;
    const newAccount = {
        username,
        password,
        name,
        phone,
        email,
        address,
        birthday,
        gender,
        role_id,
    };
    newAccount.emailToken = crypto.randomBytes(64).toString("hex");
    newAccount.isVerified = false;
    // Before - Save account in the database
    Account.beforeCreate(async(newAccount, options) => {
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(newAccount.password, salt);
        newAccount.password = hashedPassword;
    });
    // Save account in the database
    Account.create(newAccount)
        .then((data) => {
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL_ADDRESS, // ethereal us er
                    pass: process.env.EMAIL_PASSWORD, // ethereal password
                },
            });
            //const domain = "tuantanminhsanh.hopto.org:8080"
            const msg = {
                from: '"The Exapress App" <theExpressApp@example.com>', // sender address
                to: `${email}`, // list of receivers
                subject: "Sup", // Subject line
                text: `Hello, thanks for registering on our site.
                    Please click the link below to verify your account: 
                    http://${req.headers.host}/account/verify-email?token=${newAccount.emailToken}`, // plain text body
            };
            // send mail with defined transport object
            transporter
                .sendMail(msg)
                .then((info) => {
                    console.log("Message sent: %s", info.messageId);
                    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
                    return res.json({
                        message: "Please check your Email to active your Account!",
                    });
                })
                .catch((err) => {
                    console.log("Error while sending email: %s", err);
                    return res.status(500).send({
                        message: err.message || "Some error occurred while sending email.",
                    });
                });
        })
        .catch((err) => {
            return res.status(500).send({
                message: err.message || "Some error occurred while Create raw account.",
            });
        });
};
// [GET] ../account//verify-email
// check if the account is already verified
exports.verifyEmail = async(req, res) => {
    try {
        const account = await Account.findOne({
            where: { emailToken: req.query.token },
        });
        if (!account) {
            return res.status(404).send({
                message: "Token is inValid. Please contact us for assistance",
            });
        }
        account.emailToken = null;
        account.isVerified = true;
        account.save().then((data) => {
            if (data.role_id == 3) {
                const newMember = {
                    rank_number: 0,
                    point_total: 0,
                    point_exchange: 0,
                    account_id: data.id,
                };
                Membership.create(newMember);
            }
            return res.status(200).send({
                message: "Your account is now verified.",
            });
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message || "Some error occurred while activating your account.",
        });
    }
};

// [POST] ../account/login
exports.login = async(req, res) => {
    try {
        const { username, password } = req.body;
        const account = await Account.findOne({
            raw: true, // just only return dataValue
            // attributes: ['id', 'name', 'phone', 'email', 'address', 'birthday', 'gender', 'role_id'],
            where: {
                [Op.and]: [{ username: username }, { isVerified: true }],
            },
        })
        if (!account)
            return res
                .status(400)
                .json({ message: "Account is not exists or not yet verified" });
        //

        const checkPass = await bcrypt.compare(password, account.password);
        console.log(account.password.length);
        //
        if (!checkPass)
            return res.status(400).json({ message: "Password does not match" });
        const jwtToken = jwt.sign({ id: account.id, username: account.username },
            process.env.JWT_SECRET
        );
        delete account["password"];
        return res.json({ info: account, token: jwtToken });
    } catch (error) {
        return res.status(500).send({
            message: error.message || "Some error occurred while Login.",
        });
    }
};

// [GET] ../account/list
// Retrieve all accounts from the database.
exports.findAll = (req, res) => {
    const idRole = req.query.idRole;
    var condition = idRole ? {
            role_id: {
                [Op.like]: `%${idRole}%`,
            },
        } :
        null;

    Account.findAll({ where: condition })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving accounts.",
            });
        });
};
// [GET] ../account/id
// Find a single account with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Account.findByPk(id)
        .then((data) => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find account with id =${id}`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error retrieving account with id=" + id,
            });
        });
};

// [PUT] ../account/id
// Update a account by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
    Account.update(req.body, {
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "account was updated successfully.",
                });
            } else {
                res.status(404).send({
                    message: `Cannot update account with id = ${id}.Maybe nothing changed or account was not found or req.body is empty!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Error updating account with id=" + id,
            });
        });
};

// [DELETE] ../account/id
// Delete a account with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Account.destroy({
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "account was deleted successfully!",
                });
            } else {
                res.status(404).send({
                    message: `Cannot delete account with id = ${id}.Maybe account was not found!`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Could not delete account with id=" + id,
            });
        });
};