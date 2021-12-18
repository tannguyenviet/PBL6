module.exports = (sequelize, Datatypes) => {
  const Function = sequelize.define(
    "function",
    {
      id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Datatypes.STRING,
      },
      // 0 -> read ; 1 -> write 
      type: {
        type: Datatypes.BOOLEAN,
      },
      actionMethod:{
        type: Datatypes.STRING(50),
      },
      controllerName:{
        type: Datatypes.STRING,
        unique: true,
      }
    },
    {
      timestamps: false,
    }
  );

  return Function;
};
