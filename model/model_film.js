module.exports = (sequelize, Datatypes) => {
  const Film = sequelize.define("film", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Datatypes.STRING,
    },
    time_release: {
      type: Datatypes.DATE,
    },
    description: {
      type: Datatypes.STRING,
    },
    hashtag: {
      type: Datatypes.DATE,
      defaultValue: sequelize.literal('NOW()'),
    },
    rating:{
      type:Datatypes.DOUBLE,
    }
  }, {
    timestamps: false
  }
  
  );

  return Film;
};