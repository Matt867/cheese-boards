const { DataTypes, Model } = require('sequelize');
const db = require('../db/db');

class Board extends Model { }

Board.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    type: {
        type: DataTypes.STRING,
        validate: {
            len: [0,240]
        }
    },
    description: {
        type: DataTypes.STRING,
        validate: {
            len: [0,1024]
        }
    },
    rating: {
        type: DataTypes.INTEGER,
        defaultValue: 3,
        validate: {
            isNumeric: true,
            min: 0,
            max: 5,
        }
    }
}, {sequelize: db})

module.exports = Board;
