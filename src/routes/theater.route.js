const theater = require("../app/controllers/theater");
const router = require("express").Router();


// Create a new theater
router.post("/create", theater.create);

// Retrieve all theater of a city
router.get("/search", theater.searchWithCityName);

//Retrieve all city
router.get("/city/list", theater.findAllCity);

// Get list manager available for a new Theater
router.get("/manager-available/list", theater.managerAvailable);

// Get a Theater by id Account (manager)
router.get("/manager/:id", theater.findByIdManager);

// Update a theater with id
router.put("/:id", theater.update);

// Delete a theater with id
router.delete("/:id", theater.delete);



module.exports = router