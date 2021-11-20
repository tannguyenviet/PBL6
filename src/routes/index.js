const tutorialRoute = require('./tutorial.route')
const accountRoute = require('./account.route')
const filmRoute = require('./film.route')
const siteRouter = require('./site.route')
const showtime = require('./showtime.route')
const ticket = require('./ticket.route')
const theater = require('./theater.route')

function route(app) {

    // simple route
    app.use('/theater', theater);
    app.use('/tutorials', tutorialRoute);
    app.use('/film', filmRoute);
    app.use('/account', accountRoute);
    app.use('/showtime', showtime);
    app.use('/ticket', ticket);
    //get page Home
    app.use('/', siteRouter)
}

module.exports = route