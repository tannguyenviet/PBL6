const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
const route = require("./routes/index");
const middlewares = require("./app/middlewares/notFound_errorHandleMiddleware");
// const passport = require("passport");
const app = express();
const PORT = process.env.PORT || 4000;
//const PORT = process.env.PORT || 8081;
const db = require("./utils/db");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
//
db.sequelize.sync();
//
var corsOptions = {
  origin: "http://163.44.206.93:3000",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//
// app.use(morgan("combined"));
//
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
//
route(app);
//
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);
// set port, listen for requests
app.listen(PORT, () => {
  console.log(`Swagger is running on:   http://localhost:${PORT}/api-docs/`);
  console.log(`Server is running on:    http://localhost:${PORT}/`);
});
