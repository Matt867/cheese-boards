const { Cheese, Board, User } = require('../models');
const db = require('./db');

const seed = async () => {

    await db.sync({
        force: true
    });

    await User.bulkCreate([
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

    await Cheese.bulkCreate([
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

    await Board.bulkCreate([
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

}

seed();

module.exports = seed;
