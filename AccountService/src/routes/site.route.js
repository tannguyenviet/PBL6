const router = require("express").Router();

// Register a new account
router.get("/", (req, res) => {
    res.json({ message: "Welcome Account Service" });
});
module.exports = router;