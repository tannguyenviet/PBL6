module.exports = (sequelize, Datatypes) => {
  const Membership = sequelize.define("member_ship", {
    id: {
      type: Datatypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rank_number:{
      type:Datatypes.INTEGER,

    },
    point_total:{
      type:Datatypes.INTEGER,
    },
    point_exchange:{
      type:Datatypes.INTEGER,
    }
  }
  ,
  {
    timestamps: false
  },
  );

  return Membership;
};