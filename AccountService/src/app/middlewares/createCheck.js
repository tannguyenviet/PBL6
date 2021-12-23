const ADMIN_ROLE = 1;
const MANAGER_ROLE = 2;
const MEMBER_ROLE = 3;
const jwt = require("jsonwebtoken");

/**
 * Authentication Token(in System)
 * Param in request.body
 * @param {object} req request from client to server
 * @param {object} res response from server to client
 * @param {function} next action to next request
 */
function createCheck(req, res, next) {
    try {
        if (req.body.role_id == 3) {
            next();
        } else {
            const authHeader = req.headers["authorization"];
            const token = authHeader && authHeader.split(" ")[1];
            if (!token) {
                res.statusMessage = "You dont have Admin token!";
                res.status(401).send();
            }
            jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
                if (err) {
                    res.statusMessage = err.message || "Token is not valid";
                    res.status(401).send();
                } else {
                    req.payload = payload;
                    if (req.payload.role === ADMIN_ROLE) {
                        next();
                    } else {
                        res.status(403);
                        res.send("Create Manager or Admin account require an Admin Token");
                    }
                }
            });
        };

    } catch (err) {
        console.log("error", err);
        res.statusMessage = "Something error";
        res.status(500).send();
    }
};




module.exports = {
    createCheck
};