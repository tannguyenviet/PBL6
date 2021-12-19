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
            country: {
                type: Datatypes.STRING
            },
            director: {
                type: Datatypes.STRING,

            },
            duration: {
                type: Datatypes.INTEGER
            },
            labor: {
                type: Datatypes.STRING
            },
            stars: {
                type: Datatypes.STRING
            },
            description: {
                type: Datatypes.STRING(1000),
            },
            hashtag: {
                type: Datatypes.STRING
            },
            rating: {
                type: Datatypes.DOUBLE,
            },
            image: {
                type: Datatypes.STRING
            },
            trailer: {
                type: Datatypes.STRING
            },
            idFilmsOnWeb: {
                type: Datatypes.INTEGER,
            }

        }, {
            timestamps: false
        }

    );

    return Film;
};