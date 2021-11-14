const tutorials = require("../app/controllers/tutorial");
const passport = require("passport");
const router = require("express").Router();
// Create a new Tutorial
router.post("/", passport.authenticate("jwt", { session: false }), tutorials.create);

// Retrieve all Tutorials
router.get("/", passport.authenticate("jwt", { session: false }), tutorials.findAll);

// Retrieve all published Tutorials
router.get("/published", tutorials.findAllPublished);
// function get + /published -> hardcode

// Retrieve a single Tutorial with id
router.get("/:id", tutorials.findOne);

// Update a Tutorial with id
router.put("/:id", tutorials.update);

// Delete a Tutorial with id
router.delete("/:id", tutorials.delete);

// Delete all Tutorials
// router.delete("/", tutorials.deleteAll);

module.exports = router