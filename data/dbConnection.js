const sequelize = require("sequelize");

const connection = new sequelize("api_games","root","029599012",{
    host: "localhost",
    dialect: "mysql",
    timezonetimezone: "-03:00"
});

module.exports = connection;