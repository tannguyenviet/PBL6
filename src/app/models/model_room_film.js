module.exports = (sequelize, Datatypes) => {
  const RoomFilm = sequelize.define("room_film", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Datatypes.STRING,
    },
    column: {
      type: Datatypes.INTEGER,
    },
    row: {
      type: Datatypes.INTEGER,
    },
    // id theather
  }, {
    timestamps: false
  }, );

  return RoomFilm;
};