const OrderRepository = require("../repository/order");
const Account = require("../model/account");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const ADMIN_ROLE = "admin";
const MANAGER_ROLE = "manager";
const MEMBER_ROLE = "member";
module.exports = {
  async checkUserRole(req, res, next) {
    console.log("check", req.payload.role === "USER");
    if (
      req.payload.role === "ADMIN" ||
      req.payload.role === "MANAGER" ||
      req.payload.role === "USER"
    ) {
      next();
    } else {
      res.status(403);
      res.send("You dont have user permission");
    }
  },
  async checkManagerRole(req, res, next) {
    if (req.payload.role === "ADMIN" || req.payload.role === "MANAGER") {
      next();
    } else {
      res.status(403);
      res.send("You dont have Manager permission");
    }
  },
  async checkAdminRole(req, res, next) {
    if (req.payload.role === "ADMIN") {
      next();
    } else {
      res.status(403);
      res.send("You dont have permission");
    }
  },
};
