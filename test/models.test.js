const { Cheese, Board, User, Review } = require('../models/index');
const db = require('../db/db');

/* TEST FOR CRUD CAPABILITY: CREATE, READ, UPDATE, DELETE */

describe('A test suite for the Cheese Model', () => {

    test('A test designed to execute a create and read transaction', async () => {
        // Create cheese record
        createdCheese = await Cheese.create({
            title: 'Emmental',
            description: 'Emmental placeholder desc'
        });

        // read that cheese into a separate handle to check read transaction
        const readCheese = await Cheese.findOne({
            where: {
                title: 'Emmental'
            }
        });

        // compare the properties of the read record against the created record
        expect(readCheese.name).toBe(createdCheese.name);
        expect(readCheese.id).toBe(createdCheese.id);
        expect(readCheese.description).toBe(createdCheese.description);

    });

    test('Testing the datatypes of the table properties', async () => {
        const readCheese = await Cheese.findOne({
            where: {
                title: 'Emmental'
            }
        });

        expect(typeof readCheese.title).toBe('string');
        expect(typeof readCheese.description).toBe('string');
    })


    test('A test designed to execute a update transaction', async () => {
        // create handle for Cheese with id 1
        const emmental = await Cheese.findByPk(1)

        // update the record at id 1
        await emmental.update({
            title: 'CHANGED'
        })

        // create a new handle for the updated record
        const updatedEmmental = await Cheese.findByPk(1)

        // compare the changed property of against the actual change that was made
        expect(updatedEmmental.title).toBe('CHANGED');
    })

    test('A test designed to execute a delete transaction', async () => {
        // Create handle for emmental cheese with id of 1
        emmental = await Cheese.findByPk(1);
        // destroy the record associated with the handle emmental
        await emmental.destroy()
        // attempt to create another handle for emmental cheese that was just deleted
        const nullCheese = await Cheese.findByPk(1);
        // expect the find to return null
        expect(nullCheese).toBeNull()
    })


})


describe('A test suite for the Board Model', () => {

    test('A test designed to execute a create and read transaction', async () => {
        // Create board record
        createdBoard = await Board.create({
            type: 'Mixed',
            description: 'Mixed placeholder desc',
            rating: 4,
        });

        // read that Board into a separate handle to check read transaction
        const readBoard = await Board.findOne({
            where: {
                type: 'Mixed'
            }
        });

        // compare the properties of the read record against the created record
        expect(readBoard.id).toBe(createdBoard.id);
        expect(readBoard.type).toBe(createdBoard.type);
        expect(readBoard.description).toBe(createdBoard.description);
        expect(readBoard.rating).toBe(createdBoard.rating);
    });

    test('Testing the datatypes of the table properties', async () => {
        const readBoard = await Board.findOne({
            where: {
                type: 'Mixed'
            }
        });

        expect(typeof readBoard.type).toBe('string');
        expect(typeof readBoard.description).toBe('string');
        expect(typeof readBoard.rating).toBe('number');
    })

    test('A test designed to execute a update transaction', async () => {
        // create handle for Board with id 1
        const mixedBoard = await Board.findByPk(1)

        // update the record at id 1
        await mixedBoard.update({
            type: 'CHANGED'
        })

        // create a new handle for the updated record
        const updatedMixedBoard = await Board.findByPk(1)

        // compare the changed property of against the actual change that was made
        expect(updatedMixedBoard.type).toBe('CHANGED');
    })

    test('A test designed to execute a delete transaction', async () => {
        // Create handle for mixed board with id of 1
        mixedBoard = await Board.findByPk(1);
        // destroy the record associated with the handle mixed board
        await mixedBoard.destroy()
        // attempt to create another handle for mixed board that was just deleted
        const nullBoard = await Board.findByPk(1);
        // expect the find to return null
        expect(nullBoard).toBeNull()
    })
})


describe('A test suite for the User Model', () => {

    test('A test designed to execute a create and read transaction', async () => {
        // Create user record
        createdUser = await User.create({
            name: 'harry',
            email: 'harry@sidaway.com'
        });

        // read that user into a separate handle to check read transaction
        const readUser = await User.findOne({
            where: {
                name: 'harry'
            }
        });

        // compare the properties of the read record against the created record
        expect(readUser.id).toBe(createdUser.id);
        expect(readUser.name).toBe(createdUser.name);
        expect(readUser.email).toBe(createdUser.email);


    });

    test('Testing the datatypes of the table properties', async () => {
        const readUser = await User.findOne({
            where: {
                name: 'harry'
            }
        });

        expect(typeof readUser.name).toBe('string');
        expect(typeof readUser.email).toBe('string');
    })

    test('A test designed to execute a update transaction', async () => {
        // create handle for User with id 1
        const harry = await User.findByPk(1)

        // update the record at id 1
        await harry.update({
            email: 'harry@gmail.com'
        })

        // create a new handle for the updated record
        const updatedHarry = await User.findByPk(1)

        // compare the changed property of against the actual change that was made
        expect(updatedHarry.email).toBe('harry@gmail.com');
    })


    test('A test designed to execute a delete transaction', async () => {
        // Create handle for harry with id of 1
        harry = await User.findByPk(1);
        // destroy the record associated with the handle harry
        await harry.destroy()
        // attempt to create another handle for user harry that was just deleted
        const nullUser = await User.findByPk(1);
        // expect the find to return null
        expect(nullUser).toBeNull()
    })
})


describe('A test suite for the Review Model', () => {

    test('A test designed to execute a create and read transaction', async () => {
        // Create review record
        createdReview = await Review.create({
            score: 4,
            review_body: "Wow!"
        });

        // read that review into a separate handle to check read transaction
        const readReview = await Review.findOne({
            where: {
                review_body: "Wow!"
            }
        });

        // compare the properties of the read record against the created record
        expect(readReview.id).toBe(createdReview.id);
        expect(readReview.name).toBe(createdReview.name);
        expect(readReview.email).toBe(createdReview.email);
    });

    test('Testing the datatypes of the table properties', async () => {
        const readReview = await Review.findOne({
            where: {
                review_body: 'Wow!'
            }
        });

        expect(typeof readReview.score).toBe('number');
        expect(typeof readReview.review_body).toBe('string');
    })


    test('A test designed to execute a update transaction', async () => {
        // create handle for User with id 1
        const review = await Review.findByPk(1)

        // update the record at id 1
        await review.update({
            review_body: 'OMG!'
        })

        // create a new handle for the updated record
        const updatedReview = await Review.findByPk(1)

        // compare the changed property of against the actual change that was made
        expect(updatedReview.review_body).toBe('OMG!');
    })


    test('A test designed to execute a delete transaction', async () => {
        // Create handle for harry with id of 1
        review = await Review.findByPk(1);
        // destroy the record associated with the handle harry
        await review.destroy()
        // attempt to create another handle for user harry that was just deleted
        const nullReview = await Review.findByPk(1);
        // expect the find to return null
        expect(nullReview).toBeNull()
    })

})
