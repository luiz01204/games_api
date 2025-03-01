const { DataTypes} = require("sequelize")
const connection = require("../data/dbConnection");

const User = connection.define("users",{
    email: {
        type: DataTypes.STRING,
        allownull: false
    },
    password: {
        type: DataTypes.STRING,
        allownull: false
    }
});

User.sync({force: false});

module.exports = User;