const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
require("./auth/passport");
const route = require("./routes/index");
const middlewares = require("./app/middlewares/notFound_errorHandleMiddleware");
const passport = require("passport");
const app = express();
const PORT = process.env.PORT || 8081;
//const PORT = process.env.PORT || 8081;
const db = require("./utils/db");
//
db.sequelize.sync();
//
app.use(passport.initialize());
//
var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//
app.use(morgan("combined"));
//
route(app);
//
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
