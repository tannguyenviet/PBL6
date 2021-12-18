module.exports = (sequelize, Datatypes) => {
    const Project = sequelize.define("ticket", {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            price: {
                type: Datatypes.INTEGER,
            },
            time_booking: {
                type: Datatypes.DATE,
                defaultValue: sequelize.literal('NOW()'),

            },

            account_id: {
                type: Datatypes.INTEGER,
            },
            show_time_id: {
                type: Datatypes.INTEGER,
            },
            row: {
                type: Datatypes.INTEGER,
            },
            column: {
                type: Datatypes.INTEGER,
            }

        }, {
            timestamps: false
        },

        { underscored: true });
    return Project;
};