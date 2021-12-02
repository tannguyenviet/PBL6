const ticket = require("../app/controllers/ticket");
const passport = require("passport");
const router = require("express").Router();


// Create a new ticket
router.post("/create", ticket.create);

// Retrieve all ticket-locations of a showtime by showtimeId
router.get("/location/list", ticket.findLocationsByShowtimeId);

// Retrieve all ticket-locations of a showtime by showtimeId
router.get("/revenue", ticket.countRevenueByShowtimeId);

// Retrieve all ticket of a account  - Phanquyen
router.get("/account/:id", ticket.findByAccountId);

// Delete a ticket with id
router.delete("/:id", ticket.delete);



module.exports = router