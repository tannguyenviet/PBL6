module.exports = (sequelize, Datatypes) => {
  const groupFunction = sequelize.define(
    "group_function",
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Datatypes.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return groupFunction;
};
