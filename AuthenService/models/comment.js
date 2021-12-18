module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "comment",
    {
      name: {
        type: DataTypes.STRING,
      },
      text: {
        type: DataTypes.STRING,
      },
      testing: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: false,
    }
  );

  return Comment;
};
