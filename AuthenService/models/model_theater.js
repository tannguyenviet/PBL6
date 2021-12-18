module.exports = (sequelize, Datatypes) => {
    const Theater = sequelize.define("theater", {
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

    return Theater;
};