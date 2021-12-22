const tutorialRoute = require("./tutorial.route");
const accountRoute = require("./account.route");
const siteRouter = require("./site.route");

function route(app) {
  app.use("/home", siteRouter);
  app.use("/", accountRoute);
}

module.exports = route;
