module.exports = (sequelize, Datatypes) => {
  const Theather = sequelize.define("theather", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Datatypes.STRING,
    },
    address: {
      type: Datatypes.STRING,
    },
    city: {
      type: Datatypes.STRING,
    }
  }, {
    timestamps: false
  }, );

  return Theather;
};