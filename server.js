const express = require("express");
const cors = require("cors");
const tutorialRoute = require("./routes/tutorial.route")
const accountRoute = require("./routes/account.route");
require("dotenv").config();
require("./auth/passport");
const middlewares = require("./middlewares");
const passport = require("passport");

const app = express();
//
app.use(passport.initialize());
//
var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./utils/db");
db.sequelize.sync();

// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});
app.use('/tutorials', tutorialRoute);
app.use('/account', accountRoute);
// require("./routes/tutorial.route")(app);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});