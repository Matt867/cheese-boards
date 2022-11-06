const { DataTypes, Model } = require('sequelize');
const db = require('../db/db');

class Review extends Model { }

Review.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 3,
        validate: {
            isNumeric: true,
            min: 0,
            max: 5
        }
    },
    review_body: {
        type: DataTypes.TEXT,
        defaultValue: '',
        validate: {
            len: [0,1024]
        }
    }
}, {sequelize: db})

module.exports = Review;
