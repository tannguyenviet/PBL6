const roomfilm = require("../app/controllers/roomfilm");
const router = require("express").Router();
const authen = require("../app/middlewares/authen");
const author = require("../app/middlewares/author");

// // Create a new roomfilm
// router.post("/create", roomfilm.create);

// Retrieve all roomfilm of a city with idTheater=&state=
router.get("/list", authen.authenticationToken, author.checkManagerRole, roomfilm.findAll);

// Retrieve a pricetype by id
router.get("/:id", authen.authenticationToken, author.checkManagerRole, roomfilm.findByID);

// Update a roomfilm with id
router.put("/:id", authen.authenticationToken, author.checkAdminRole, roomfilm.update);

// Delete a roomfilm with id
router.delete("/:id", authen.authenticationToken, author.checkAdminRole, roomfilm.delete);



module.exports = router