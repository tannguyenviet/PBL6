const jwt = require("jsonwebtoken");

/**
 * Authentication Token(in System)
 * Param in request.body
 * @param {object} req request from client to server
 * @param {object} res response from server to client
 * @param {function} next action to next request
 */
const authenticationToken = async (req, res, next) => {
  console.log("vao authen");
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
      res.statusMessage = "You dont have token!";
      res.status(401).send();
    }
    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        res.statusMessage = err.message || "Token is not valid";
        res.status(401).send();
      } else {
        req.payload = payload;
        next();
      }
    });
  } catch (err) {
    console.log("error", err);
    res.statusMessage = "Something error";
    res.status(500).send();
  }
};
module.exports = {
  authenticationToken,
};
