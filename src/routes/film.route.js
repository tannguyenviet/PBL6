const film = require("../app/controllers/film");
const passport = require("passport");
const router = require("express").Router();


// Retrieve all film
router.get("/", film.findAll);
// Create a new film
router.post("/create", film.create);

// Retrieve a single film with id
router.get("/:id", film.findOne);

// Update a film with id
router.put("/:id", film.update);

// Delete a film with id
router.delete("/:id", film.delete);



module.exports = router