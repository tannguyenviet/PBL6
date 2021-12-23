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
  app.use("/payment", order);
  app.use("/theater", theater);
  app.use("/tutorials", tutorialRoute);
  app.use("/film", filmRoute);
  app.use("/account", accountRoute);
  app.use("/showtime", showtime);
  app.use("/ticket", ticket);
  app.use("/membership", membership);
  app.use("/pricetype", pricetype);
  app.use("/roomfilm", roomfilm);

  //get page Home
  app.use("/", siteRouter);
}

module.exports = route;
