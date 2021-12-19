module.exports = (sequelize, Datatypes) => {
    const Project = sequelize.define("ticket", {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            amount: {
                type: Datatypes.INTEGER
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
            location: {
                type: Datatypes.STRING,
            },
            ticketHash: {
                type: Datatypes.STRING(255),
            },
            ticketQR: {
                type: Datatypes.STRING(10000),
            },
            check_in: {
                type: Datatypes.BOOLEAN,
                defaultValue: false,
            }

        }, {
            timestamps: false
        },

        { underscored: true });
    return Project;
};