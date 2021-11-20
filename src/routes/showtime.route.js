const showtime = require("../app/controllers/showtime");
const passport = require("passport");
const router = require("express").Router();


// Create a new showtime
router.post("/create", showtime.create);

// Retrieve all showtime of a Film having a specific idTheater and a date
router.get("/search", showtime.findAllWithIdFilmAndIdTheaterAndDate);

// Update a showtime with id
router.put("/:id", showtime.update);

// Delete a showtime with id
router.delete("/:id", showtime.delete);



module.exports = router