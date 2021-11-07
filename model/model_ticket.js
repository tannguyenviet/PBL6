module.exports = (sequelize, Datatypes) => {
  const Project = sequelize.define("ticket", {
    price:{
      type:Datatypes.INTEGER,
    },
    time_booking:{
      type:Datatypes.DATE,
      defaultValue: sequelize.literal('NOW()'),

    },

    account_id:{
      type:Datatypes.INTEGER,
      primaryKey: true
    },
    show_time_id:{
      type:Datatypes.INTEGER,
      primaryKey: true
    },
    row:{
      type:Datatypes.INTEGER,
    },
    column:{
      type:Datatypes.INTEGER,
    }
    
  },
  {
    timestamps: false
  },
  
  {underscored: true});
  return Project;
};