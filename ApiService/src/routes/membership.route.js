const membership = require("../app/controllers/membership");
const router = require("express").Router();
const authen = require("../app/middlewares/authen");
const author = require("../app/middlewares/author")

// // Create a new membership
// router.post("/create", membership.create);

// Retrieve all membership of a city
router.get("/list", authen.authenticationToken, author.checkAdminRole, membership.findAll);

// Update a membership with id
router.put("/:id", authen.authenticationToken, author.checkMemberRole, membership.update);

// Delete a membership with id
router.delete("/:id", authen.authenticationToken, author.checkAdminRole, membership.delete);



module.exports = router