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
    },
    review_body: {
        type: DataTypes.TEXT,
        defaultValue: ''
    }
}, {sequelize: db})

module.exports = Review;
