const dbConfig = require("../config/db.config");
const tutorialModel = require("../app/models/tutorial");
const commentModel = require("../app/models/comment");
const roleModel = require("../app/models/model_role");
const accountModel = require("../app/models/model_account");
const membershipModel = require("../app/models/model_membership");
const theaterModel = require("../app/models/model_theater");
const roomFilmModel = require("../app/models/model_room_film");
const ticketModel = require("../app/models/model_ticket");
const priceTypeModel = require("../app/models/model_price_type");
const showTimeModel = require("../app/models/model_showtime");
const filmModel = require("../app/models/model_film");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  logging: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
  define: {
    charset: "utf8",
    collate: "utf8_general_ci",
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.role = roleModel(sequelize, Sequelize);
db.account = accountModel(sequelize, Sequelize);
db.membership = membershipModel(sequelize, Sequelize);
db.theater = theaterModel(sequelize, Sequelize);
db.room_film = roomFilmModel(sequelize, Sequelize);
db.ticket = ticketModel(sequelize, Sequelize);
db.price_type = priceTypeModel(sequelize, Sequelize);
db.show_time = showTimeModel(sequelize, Sequelize);
db.film = filmModel(sequelize, Sequelize);
//
db.tutorials = tutorialModel(sequelize, Sequelize);
db.comments = commentModel(sequelize, Sequelize);

//Create relationships
//// accounts(manager) - theater
db.account.hasOne(db.theater, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: true,
    name: "account_id",
  },
});
db.theater.belongsTo(db.account, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: true,
    name: "account_id",
  },
});
//// accounts - memberships
db.account.hasOne(db.membership, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "account_id",
  },
});
db.membership.belongsTo(db.account, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "account_id",
  },
});

//// accounts - tickets - show_times
db.account.hasMany(db.ticket, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "account_id",
  },
});
db.ticket.belongsTo(db.account, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "account_id",
  },
});
//
db.show_time.hasMany(db.ticket, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "show_time_id",
  },
});
db.ticket.belongsTo(db.show_time, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "show_time_id",
  },
});

//// roles - accounts
db.role.hasMany(db.account, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "role_id",
  },
});
db.account.belongsTo(db.role, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "role_id",
  },
});

//// theaters - room_films
db.theater.hasMany(db.room_film, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "theater_id",
  },
});
db.room_film.belongsTo(db.theater, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "theater_id",
  },
});

//// films - [show_times] - price_types - room_films

db.film.hasMany(db.show_time, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "film_id",
  },
});
db.show_time.belongsTo(db.film, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "film_id",
  },
});
//
db.price_type.hasMany(db.show_time, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "price_type_id",
  },
});
db.show_time.belongsTo(db.price_type, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "price_type_id",
  },
});
//
db.room_film.hasMany(db.show_time, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "room_film_id",
  },
});
db.show_time.belongsTo(db.room_film, {
  foreignKey: {
    type: Sequelize.INTEGER,
    allowNull: false,
    name: "room_film_id",
  },
});

//// tutorials - comments
db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
  foreignKey: "tutorial_id",
  as: "tutorial",
});

module.exports = db;
