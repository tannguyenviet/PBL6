const siteRouter = require("./site.route");
const order = require("./order.route");

function route(app) {
  // simple route
  app.use("/", order);

  //get page Home
  app.use("/home", siteRouter);
}

module.exports = route;
