module.exports = (sequelize, Datatypes) => {
  const Role = sequelize.define("role", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name :{
      type:Datatypes.STRING,
    },
  },
  {
    timestamps: false
  },
  );

  return Role;
};