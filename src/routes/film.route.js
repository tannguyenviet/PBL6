const film = require("../app/controllers/film");
const passport = require("passport");
const router = require("express").Router();


// Retrieve all film
router.get("/list", film.findAll);
//Get NowPlaying films
router.get("/now-playing", film.findNowPlaying);
//Get UpComing films
router.get("/up-coming", film.findUpComing);
// Create a new film
router.get("/create", film.create);

// Retrieve a single film with id
router.get("/:id", film.findOne);

// Update a film with id
router.put("/:id", film.update);

// Delete a film with id
router.delete("/:id", film.delete);



module.exports = router