const tutorialRoute = require("./tutorial.route");
const accountRoute = require("./account.route");
const filmRoute = require("./film.route");
const siteRouter = require("./site.route");
const showtime = require("./showtime.route");
const ticket = require("./ticket.route");
const theater = require("./theater.route");
const membership = require("./membership.route");
const pricetype = require("./pricetype.route");
const roomfilm = require("./roomfilm.route");
const order = require("./order.route");

function route(app) {
  // simple route
  app.use("/", order);
  //get page Home
  app.use("/homie", siteRouter);
}

module.exports = route;
