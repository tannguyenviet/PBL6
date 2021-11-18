module.exports = (sequelize, Datatypes) => {
    const Account = sequelize.define("account", {
        id: {
            type: Datatypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Datatypes.STRING,
        },
        password: {
            type: Datatypes.STRING,
        },
        name: {
            type: Datatypes.STRING
        },
        phone: {
            type: Datatypes.STRING(12)
        },
        email: {
            type: Datatypes.STRING(100)
        },
        address: {
            type: Datatypes.STRING(255)
        },
        birthday: {
            type: Datatypes.DATE
        },
        gender: {
            type: Datatypes.BOOLEAN,
        },
        emailToken: {
            type: Datatypes.STRING(255),
        },
        isVerified: {
            type: Datatypes.BOOLEAN,
        },
        // id member ship + id role
        // account_type:{
        //   type:Datatypes.INTEGER,
        // }
    }, {
        timestamps: false
    }, );

    return Account;
};