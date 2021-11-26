const pricetype = require("../app/controllers/pricetype");
const router = require("express").Router();


// // Create a new pricetype
// router.post("/create", pricetype.create);

// Retrieve all pricetype of a city
router.get("/list", pricetype.findAll);

// Update a pricetype with id
router.put("/:id", pricetype.update);

// Delete a pricetype with id
router.delete("/:id", pricetype.delete);



module.exports = router