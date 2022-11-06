const { Cheese, Board, User, Review } = require('../models');
const db = require('./db');
const createNewReview = require('../src/main')

const populate = async () => {
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

    // assign each board to a random user
    for (let i=0; i < boards.length; i++) {
        const u1 = await User.findByPk(Math.floor((Math.random()) * 7) + 1);

        boards[i].setUser(u1);
    }

    // add random cheeses to each board
    for (let j=0; j < 5; j++) {
        const b1 = await Board.findByPk(j+1);

        for (let k = 0; k < 10; k++) {
            const c1 = await Cheese.findByPk(Math.floor((Math.random()) * 6) + 1);
            b1.addCheese(c1)
        }

    }

    // create 150 randomly rated reviews on random boards
    for (let w = 0; w < 50; w++) {

        createNewReview(users[Math.floor(Math.random()*users.length)], boards[Math.floor(Math.random()*boards.length)], Math.floor((Math.random()*5)+1), 'placeholder');

    }
}

const seed = async () => {

    await Cheese.sync()
    await Board.sync()
    await User.sync()
    await Review.sync()

    await populate()

}

seed();

module.exports = seed;
