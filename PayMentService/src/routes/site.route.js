const router = require("express").Router();

// Register a new account
router.get("/", (req, res) => {
  res.json({ message: "Welcome to PBL6" });
  //res.render('returnPayment')
});
module.exports = router;
