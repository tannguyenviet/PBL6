module.exports = (sequelize, Datatypes) => {
    const RoomFilm = sequelize.define("room_film", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Datatypes.STRING,
        },
        column: {
            type: Datatypes.INTEGER,
            defaultValue: 14
        },
        row: {
            type: Datatypes.INTEGER,
            defaultValue: 7
        },
        // id theather
    }, {
        timestamps: false
    }, );

    return RoomFilm;
};