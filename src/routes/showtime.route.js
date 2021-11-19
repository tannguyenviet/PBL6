const showtime = require("../app/controllers/showtime");
const passport = require("passport");
const router = require("express").Router();


// Create a new showtime
router.post("/create", showtime.create);

// Retrieve a single showtime with id
router.get("/:id", showtime.findOne);

// Retrieve all showtime belong to a film
router.get("/film/:id", showtime.findAllWithIdFilm);

// Update a showtime with id
router.put("/:id", showtime.update);

// Delete a showtime with id
router.delete("/:id", showtime.delete);



module.exports = router