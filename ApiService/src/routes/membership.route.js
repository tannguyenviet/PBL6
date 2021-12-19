const membership = require("../app/controllers/membership");
const router = require("express").Router();


// // Create a new membership
// router.post("/create", membership.create);

// Retrieve all membership of a city
router.get("/list", membership.findAll);

// Update a membership with id
router.put("/:id", membership.update);

// Delete a membership with id
router.delete("/:id", membership.delete);



module.exports = router