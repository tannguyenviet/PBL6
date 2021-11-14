module.exports = (sequelize, Datatypes) => {
  const PriceType = sequelize.define("price_type", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type:Datatypes.STRING,
    },
    price:{
      type:Datatypes.INTEGER,
    }
  }
  ,
  {
    timestamps: false
  },
  );

  return PriceType;
};