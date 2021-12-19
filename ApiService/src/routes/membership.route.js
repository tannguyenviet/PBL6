const membership = require("../app/controllers/membership");
const router = require("express").Router();
const authen = require("../app/middlewares/authen");
const author = require("../app/middlewares/author")

// // Create a new membership
// router.post("/create", membership.create);

// Retrieve all membership of a city
router.get("/list", authen.authenticationToken, author.checkManagerRole, membership.findAll);

// Update a membership with id
router.put("/:id", membership.update);

// Delete a membership with id
router.delete("/:id", membership.delete);



module.exports = router