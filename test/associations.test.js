const { Cheese, Board, User } = require('../models/index');
const db = require('../db/db');

// Clear database before each test
beforeEach(async () => {
    await db.sync({
        force: true
    });
});

describe('Test Suite testing the One to Many relationship between User and Board', () => {

    test('Eager Loading of user info from board', async () => {

        // create test user
        const u1 = await User.create({
            name: 'eg',
            email: 'example@mail.com'
        });

        // create test board
        const b1 = await Board.create({
            type: 'basic',
            description: 'placeholder',
            rating: 4
        });

        // set test user to owning test board
        await b1.setUser(u1);

        // create new handle for test board
        const b2 = await Board.findByPk(b1.id, { include: User });

        // compare handle properties
        expect(b2.User.email).toEqual('example@mail.com');
        expect(b2.User.name).toEqual('eg');

    });

    test('Lazy Loading of user info from board', async () => {

        // create test user
        const u1 = await User.create({
            name: 'eg',
            email: 'example@mail.com'
        });

        // create test board
        const b1 = await Board.create({
            type: 'basic',
            description: 'placeholder',
            rating: 4
        });

        // set test user to owning test board
        await b1.setUser(u1);

        // new handle for test board
        const b2 = await Board.findByPk(b1.id);

        // lazy loading of test user data
        newU1 = await b2.getUser()

        // compare handle properties
        expect(newU1.email).toEqual('example@mail.com');
        expect(newU1.name).toEqual('eg');

    });

    test('Adding multiple boards to one user', async () => {

        // create single test user
        const u1 = await User.create(
        {
            name: 'eg',
            email: 'example@mail.com'
        })

        // create multiple test boards
        const boards = await Board.bulkCreate(
            {
                type: 'ready',
                description: 'placeholder',
                rating: 4
            },
            {
                type: 'yum',
                description: 'placeholder',
                rating: 4
            },
            {
                type: 'gross',
                description: 'placeholder',
                rating: 4
            },
            {
                type: 'delicious',
                description: 'placeholder',
                rating: 4
            }
        );

        // add the all created boards to the same user and test against real values
        for (board of boards) {

            await board.setUser(u1);
            newBoard = await Board.findByPk(board.id, {include: User});
            expect(newBoard.User.name).toBe('eg');
            expect(newBoard.User.email).toBe('example@mail.com');

        }

    })

});


describe('Test Suite testing the Many to Many relationship between Cheese and Board', () => {

    test('Adding many cheeses to one board', async () => {

        // create single test board
        board = await Board.create(
            {
                type: "gross",
                description: "placeholder"
            }
        )

        // create many test cheeses
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

        // add every cheese to the test board
        for (cheese of cheeses) {
            await board.addCheese(cheese);
        }

        // create new handle for test board
        checkBoard = await Board.findByPk(1, {include: Cheese});

        // compare every cheese against the real values
        for (let k = 0; k < checkBoard.Cheeses.length; k++) {
            expect(checkBoard.Cheeses[k].title).toBe(cheeses[k].title)
        }

    })


    test('Adding many cheeses to many boards', async () => {

        // create many test boards
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

        // create many test cheeses
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

        // add every cheese to every board
        for (board of boards){
            for (cheese of cheeses) {
                await board.addCheese(cheese);
            }
        }

        // new handle on all the boads
        checkBoards = await Board.findAll({ include: Cheese });

        // compare every cheese on every board against real vals
        for (checkBoard of checkBoards) {
            for (let j = 0; j < checkBoard.Cheeses.length; j++){
                expect(checkBoard.Cheeses[j].title).toEqual(cheeses[j].title)
                expect(checkBoard.Cheeses[j].description).toEqual(cheeses[j].description)
            }
        }

    })

})
