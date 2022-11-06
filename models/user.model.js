const { DataTypes, Model } = require('sequelize');
const db = require('../db/db');

class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        validate: {
            len: [0,24]
        }
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            isEmail: true
        }
    },
}, {sequelize: db})

module.exports = User;
