const tutorialRoute = require('./tutorial.route')
const accountRoute = require('./account.route')
const filmRoute = require('./film.route')
const siteRouter = require('./site.route')

function route(app) {

    // simple route
    app.use('/tutorials', tutorialRoute);
    app.use('/film', filmRoute);
    app.use('/account', accountRoute);
    //get page Home
    app.use('/', siteRouter)
}

module.exports = route