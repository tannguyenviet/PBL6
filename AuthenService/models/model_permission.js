module.exports = (sequelize, Datatypes) => {
  const permission = sequelize.define(
    "permission",
    {
      role_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
      },
      group_function_id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
      },
      enable: {
        type: Datatypes.BOOLEAN,
      },
    },
    {
      timestamps: false,
    },

    { underscored: true }
  );
  return permission;
};
