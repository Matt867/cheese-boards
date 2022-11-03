const { Cheese, Board, User } = require('../models');
const db = require('../db/db');

async function main () {
    const boards = await Board.findAll({include: Cheese});

    const boards1 = boards.map(record => record.Cheeses)

    console.table(boards1)
}

main()
