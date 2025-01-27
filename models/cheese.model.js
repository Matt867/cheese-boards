const { DataTypes, Model } = require('sequelize');
const db = require('../db/db');

class Cheese extends Model { }

Cheese.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
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
}, {sequelize: db})

module.exports = Cheese;
