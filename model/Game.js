const { DataTypes} = require("sequelize");
const connection = require("../data/dbConnection");

const Game = connection.define("games",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    }
});

Game.sync({ force: false});

module.exports = Game;