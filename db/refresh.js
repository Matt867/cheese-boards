const { Cheese, Board, User } = require('../models');
const db = require('./db');

const refresh = async () => {
    await db.sync({
        force: true
    });
}

refresh();

module.exports = refresh
