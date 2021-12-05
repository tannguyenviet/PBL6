const showtime = require("../app/controllers/showtime");
const passport = require("passport");
const router = require("express").Router();

// Create a new showtime - Manager
router.post("/create", showtime.create);

// Retrieve all Showtime with condition
router.get("/list", showtime.findAll);

// Retrieve all showtime of a Film having a specific idTheater and a date - Manager
router.get("/search", showtime.findAllWithIdFilmAndIdTheaterAndDate);

// Retrieve all showtime of a Film having a specific idTheater and a date - Admin
router.get("/searchForAdmin", showtime.findAllWithIdFilmAndIdTheaterAndDateForAdmin);

// Retrieve a Showtime by id
router.get("/:id", showtime.findById);

// Update a showtime with id - Manager
router.put("/:id", showtime.update);

// Delete a showtime with id - Manager
router.delete("/:id", showtime.delete);

module.exports = router;