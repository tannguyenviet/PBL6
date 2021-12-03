const roomfilm = require("../app/controllers/roomfilm");
const router = require("express").Router();


// // Create a new roomfilm
// router.post("/create", roomfilm.create);

// Retrieve a pricetype by id
router.get("/:id", roomfilm.findByID);

// Retrieve all roomfilm of a city
router.get("/list", roomfilm.findAll);

// Update a roomfilm with id
router.put("/:id", roomfilm.update);

// Delete a roomfilm with id
router.delete("/:id", roomfilm.delete);



module.exports = router