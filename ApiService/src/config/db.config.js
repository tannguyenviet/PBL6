module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "pbl6_main",

    // PASSWORD: "123456",
    // DB: "pbl6",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};