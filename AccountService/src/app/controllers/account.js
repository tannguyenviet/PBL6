const db = require("../../utils/db");
const Account = db.account;
const Membership = db.membership;
const Op = db.Sequelize.Op;
const jwt = require("jsonwebtoken");
//
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const bcrypt = require("bcrypt");

// [POST] ../account/register
// Create and Save a new account
exports.register = async (req, res) => {
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
      message: err.message,
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
    name,
    phone,
    email,
    address,
    birthday,
    gender,
    role_id,
  };
  var newPassword;
  if (role_id == 3) {
    newAccount.emailToken = crypto.randomBytes(64).toString("hex");
    newAccount.isVerified = false;
    // Before - Save account in the database
    Account.beforeCreate(async (newAccount, options) => {
      const saltRounds = 10;
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);
      newAccount.password = hashedPassword;
    });
    // Save account in the database
  } else {
    newAccount.emailToken = null;
    newAccount.isVerified = true;
    var generator = require("generate-password");
    newPassword = generator.generate({
      length: 10,
      numbers: true,
    });
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(newPassword, salt);
    newAccount.password = hashedPassword;
  }
  await Account.create(newAccount)
    .then((data) => {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        ignoreTLS: false,
        secure: false,
        auth: {
          user: process.env.EMAIL_ADDRESS, // ethereal us er
          pass: process.env.EMAIL_PASSWORD, // ethereal password
        },
      });
      //const domain = "tuantanminhsanh.hopto.org:8080"
      //const domain = "42.115.230.103:8080"
      const msg =
        role_id == 3
          ? {
              from: '"The Movie PBL6 App" <theMovieApp@example.com>', // sender address
              to: `${email}`, // list of receivers
              subject: "Verification for your account", // Subject line
              text: `Hello, thanks for registering on our site.
                    Please click the link below to verify your account: 
                    http://${req.headers.host}:8080/account/verify-email?token=${newAccount.emailToken}`, // plain text body
            }
          : {
              from: '"The Movie PBL6 App" <theMovieApp@example.com>', // sender address
              to: `${email}`, // list of receivers
              subject: "Account created by Admin", // Subject line
              text: `Hello this is your account: 
                    Username: ${data.username}
                    Password: ${newPassword}
                    Role id: ${data.role_id}`, //
            };
      // send mail with defined transport object
      transporter
        .sendMail(msg)
        .then((info) => {
          return res.json({
            message: "Please check your Email to active your Account!",
          });
        })
        .catch((err) => {
          return res.status(500).send({
            message: err.message,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).send({
        message: err.message,
      });
    });
};
// [GET] ../account//verify-email
// check if the account is already verified
exports.verifyEmail = async (req, res) => {
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
      message: error.message,
    });
  }
};

// [POST] ../account/login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const account = await Account.findOne({
      raw: true, // just only return dataValue
      // attributes: ['id', 'name', 'phone', 'email', 'address', 'birthday', 'gender', 'role_id'],
      where: {
        [Op.and]: [{ username: username }, { isVerified: true }],
      },
    });
    if (!account)
      return res
        .status(400)
        .json({ message: "Account is not exists or not yet verified" });
    //

    const checkPass = await bcrypt.compare(password, account.password);
    //
    if (!checkPass)
      return res.status(400).json({ message: "Password does not match" });
    const jwtToken = jwt.sign(
      { id: account.id, username: account.username, role: account.role_id },
      process.env.JWT_SECRET
    );
    delete account["password"];
    return res.json({ info: account, token: jwtToken });
  } catch (error) {
    return res.status(500).send({
      message: error.message,
    });
  }
};

// [GET] ../account/list
// Retrieve all accounts from the database.
exports.findAll = (req, res) => {
  const idRole = req.query.idRole;
  var condition = idRole
    ? {
        role_id: {
          [Op.like]: `%${idRole}%`,
        },
      }
    : null;

  Account.findAll({ where: condition })
    .then((data) => {
      return res.send(data);
    })
    .catch((err) => {
      return res.status(500).send({
        message: err.message,
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
        message: err.message,
      });
    });
};

// [PUT] ../account/id
// Update a account by the id in the request
exports.updateAccountInfo = async (req, res) => {
  const id = req.params.id;
  const account = await Account.findByPk(id);
  if (!account) {
    return res.status(404).send({ message: "This User not found" });
  }
  const { name, phone, address, birthday, gender } = req.body;
  const info = { name, phone, address, birthday, gender };
  Account.update(info, {
    where: { id: id },
  })
    .then((num) => {
      res.send({
        message: "account was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
exports.updatePassword = async (req, res) => {
  const id = req.params.id;
  const account = await Account.findByPk(id);
  if (!account) {
    return res.status(404).send({ message: "This User not found" });
  }
  //check currentPassword is true
  const { currentPassword, newPassword } = req.body;
  const checkPass = await bcrypt.compare(currentPassword, account.password);
  if (!checkPass)
    return res
      .status(400)
      .json({ message: "Your current password does not match" });
  // change password
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(newPassword, salt);
  // Save the password
  account.set({
    password: hashedPassword,
  });
  account
    .save()
    .then(() => {
      res.send({
        message: "Password was updated successfully.",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
exports.resetPassword = async (req, res) => {
  // check alreadyExistsUserr
  const email = req.body.email;
  const account = await Account.findOne({
    where: { email: email },
  });
  if (!account) {
    return res
      .status(400)
      .json({ message: "This email does not belong to any accounts" });
  }
  // reset password
  var generator = require("generate-password");
  var newPassword = generator.generate({
    length: 10,
    numbers: true,
  });
  const saltRounds = 10;
  const salt = bcrypt.genSaltSync(saltRounds);
  const hashedPassword = bcrypt.hashSync(newPassword, salt);
  // Save the password
  account.set({
    password: hashedPassword,
  });
  account
    .save()
    .then(() => {
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        ignoreTLS: false,
        secure: false,
        auth: {
          user: process.env.EMAIL_ADDRESS, // ethereal us er
          pass: process.env.EMAIL_PASSWORD, // ethereal password
        },
      });
      //const domain = "tuantanminhsanh.hopto.org:8080"
      //const domain = "42.115.230.103:8080"
      const msg = {
        from: '"The Movie PBL6 App" <theMovieApp@example.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Reset Password", // Subject line
        text: `Hello,this is your reset password: ${newPassword}`, // plain text body
      };
      // send mail with defined transport object
      transporter
        .sendMail(msg)
        .then((info) => {
          return res.json({
            message: "Please check your Email to get your reset password!",
          });
        })
        .catch((err) => {
          console.log("Error while sending email: %s", err);
        });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
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
        message: err.message,
      });
    });
};
