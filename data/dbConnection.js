const sequelize = require("sequelize");
require("dotenv").config();


const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

const connection = new sequelize(dbName,dbUser,dbPass,{
    host: "localhost",
    dialect: "mysql",
    timezonetimezone: "-03:00"
});

module.exports = connection;