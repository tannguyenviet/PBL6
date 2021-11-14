const dbConfig = require("../config/db.config");
const tutorialModel = require("../app/models/tutorial");
const commentModel = require("../app/models/comment");
const roleModel = require("../app/models/model_role");
const accountModel = require("../app/models/model_account");
const membershipModel = require("../app/models/model_membership");
const theatherModel = require("../app/models/model_theather");
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
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.role = roleModel(sequelize, Sequelize);
db.account = accountModel(sequelize, Sequelize);
db.membership = membershipModel(sequelize, Sequelize);
db.theather = theatherModel(sequelize, Sequelize);
db.room_film = roomFilmModel(sequelize, Sequelize);
db.ticket = ticketModel(sequelize, Sequelize);
db.price_type = priceTypeModel(sequelize, Sequelize);
db.show_time = showTimeModel(sequelize, Sequelize);
db.film = filmModel(sequelize, Sequelize);


db.tutorials = tutorialModel(sequelize, Sequelize);
db.comments = commentModel(sequelize, Sequelize);

db.membership.belongsTo(db.account, { allowNull: true });
db.account.hasOne(db.membership);

db.account.belongsToMany(db.show_time, { foreignKey: "account_id", through: "ticket" });
db.show_time.belongsToMany(db.account, { foreignKey: "show_time_id", through: "ticket" });
// db.account.hasOne(db.membership, {
//   foreignKey:{
//     type: Sequelize.INTEGER,
//     allowNull:false,
//     name:"membership_id "
//   }
// });

db.role.hasMany(db.account, {
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false,
        name: "role_id"
    }
});
db.account.belongsTo(db.role, {
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false,
        name: "role_id"
    }
});


db.theather.hasMany(db.room_film, {
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false,
        name: "theather_id"
    }
});
db.room_film.belongsTo(db.theather, {
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false,
        name: "theather_id"
    }
});

db.film.belongsToMany(db.price_type, { foreignKey: "film_id", through: "show_time" });
db.price_type.belongsToMany(db.film, { foreignKey: "price_type_id", through: "show_time" });
// db.film.hasMany(db.show_time,{
//   foreignKey:{
//     type: Sequelize.INTEGER,
//     allowNull:false,
//     name:"film_id"
//   }
// });
// db.show_time.belongsTo(db.film,{
//   foreignKey:{
//     type: Sequelize.INTEGER,
//     allowNull:false,
//     name:"film_id"
//   }
// });

// db.price_type.hasMany(db.show_time,{
//   foreignKey:{
//     type: Sequelize.INTEGER,
//     allowNull:false,
//     name:"film_id"
//   }
// });
// db.show_time.belongsTo(db.price_type,{
//   foreignKey:{
//     type: Sequelize.INTEGER,
//     allowNull:false,
//     name:"film_id"
//   }
// });



db.room_film.hasMany(db.show_time, {
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false,
        name: "room_film_id"
    }
});
db.show_time.belongsTo(db.room_film, {
    foreignKey: {
        type: Sequelize.INTEGER,
        allowNull: false,
        name: "room_film_id"
    }
});

db.tutorials.hasMany(db.comments, { as: "comments" });
db.comments.belongsTo(db.tutorials, {
    foreignKey: "tutorial_id",
    as: "tutorial",
});


module.exports = db;