const account = require("../controller/account");

const router = require("express").Router();

// Register a new account
router.post("/register", account.register);

// Login account
router.post("/login", account.login);

// Retrieve all account
router.get("/", account.findAll);

// Retrieve all published account
router.get("/published", account.findAllPublished);
// function get + /published -> hardcode

// Retrieve a single account with id
router.get("/:id", account.findOne);

// Update a account with id
router.put("/:id", account.update);

// Delete a account with id
router.delete("/:id", account.delete);

// Delete all account
// router.delete("/", account.deleteAll);

module.exports = router