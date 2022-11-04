const { Cheese, Board, User, Review } = require('../models');
const db = require('./db');
const createNewReview = require('../src/main')

const seed = async () => {

    await db.sync({
        force: true
    });

    users = await User.bulkCreate([
        {
            name: "Charles Windsor",
            email: "charles@royal.com"
        },
        {
            name: "Karl Marx",
            email: "marx@communism.com"
        },
        {
            name: "Friedrich Engels",
            email: "friedrich@communism.com"
        },
        {
            name: "Noam Chomsky",
            email: "noamchomsky@hotmail.com"
        },
        {
            name: "Jason Bourne",
            email: "bourne@protonmail.com"
        },
        {
            name: "Adam Smith",
            email: "adamsmith@freemarket.com"
        },
        {
            name: "John Maynard-Keynes",
            email: "johnny@keynesian"
        }
    ])

    cheeses = await Cheese.bulkCreate([
        {
            title: "Burata",
            description: "placeholder"
        },
        {
            title: "Mascarpone",
            description: "placeholder"
        },
        {
            title: "Parmesan",
            description: "placeholder"
        },
        {
            title: "Halloumi",
            description: "placeholder"
        },
        {
            title: "Cheddar",
            description: "placeholder"
        },
        {
            title: "Camembert",
            description: "placeholder"
        }
    ])

    boards = await Board.bulkCreate([
        {
            type: "gross",
            description: "placeholder"
        },
        {
            type: "yum",
            description: "placeholder"
        },
        {
            type: "tasty",
            description: "placeholder"
        },
        {
            type: "royal",
            description: "placeholder"
        },
        {
            type: "enjoyable",
            description: "placeholder"
        },
        {
            type: "fancy",
            description: "placeholder"
        }
    ])

    for (let i=0; i < Math.floor(Math.random()*4); i++) {
        const b1 = await Board.findByPk(Math.floor((Math.random()) * 6) + 1);

        const u1 = await User.findByPk(Math.floor((Math.random()) * 7) + 1);

        b1.setUser(u1);
    }

    for (let j=0; j < 5; j++) {
        const b1 = await Board.findByPk(j+1);

        for (let k = 0; k < 10; k++) {
            const c1 = await Cheese.findByPk(Math.floor((Math.random()) * 6) + 1);
            b1.addCheese(c1)
        }

    }

    for (let w = 0; w < 100; w++) {

        createNewReview(users[Math.floor(Math.random()*users.length)], boards[Math.floor(Math.random()*boards.length)], Math.floor((Math.random()*5)+1), 'placeholder');

    }

}

seed();

module.exports = seed;
