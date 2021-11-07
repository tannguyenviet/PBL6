module.exports = (sequelize, Datatypes) => {
  const ShowTime = sequelize.define("show_time", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    time_start: {
      type: Datatypes.DATE,
    },
    time_end: {
      type: Datatypes.DATE
    },
    row: {
      type: Datatypes.INTEGER,
    },
    // id theather
  }, {
    timestamps: false
  }, );

  return ShowTime;
};