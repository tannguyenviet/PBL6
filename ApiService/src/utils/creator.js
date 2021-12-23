const db = require("./db");
const dbInit = require("./init");

const Film = db.film;
const Account = db.account;
const Membership = db.membership;
const Pricetype = db.price_type;
const Theater = db.theater;
const RoomFilm = db.room_film;
const Showtime = db.show_time;
const Role = db.role;

const initDb = async () => {
  await db.sequelize.sync({ force: true });
  await Film.bulkCreate(dbInit.films);
  await Role.bulkCreate(dbInit.roles);
  await Account.bulkCreate(dbInit.accounts);
  await Pricetype.bulkCreate(dbInit.priceTypes);
  await Theater.bulkCreate(dbInit.theathers);
  await RoomFilm.bulkCreate(dbInit.roomFilms);
  await Showtime.bulkCreate(dbInit.showTimes);
};
module.exports = initDb;