const { Cheese, Board, User } = require('../models');
const db = require('./db');

const seed = async () => {

    await db.sync({
        force: true
    });

}

seed();
