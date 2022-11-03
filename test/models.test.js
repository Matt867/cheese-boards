const { Cheese, Board, User } = require('../models/index');
const db = require('../db/db');
const { update } = require('../models/cheese.model');

/* TEST FOR CRUD CAPABILITY: CREATE, READ, UPDATE, DELETE */

describe('Tests for the Cheese Model', () => {

    test('A test designed to execute a create and read transaction', async () => {
        createdCheese = await Cheese.create({
            title: 'Emmental',
            description: 'Emmental placeholder desc'
        });

        const readCheese = await Cheese.findOne({
            where: {
                title: 'Emmental'
            }
        });

        expect(readCheese.name).toBe(createdCheese.name);
        expect(readCheese.id).toBe(createdCheese.id);
        expect(readCheese.description).toBe(createdCheese.description);

    });


    test('A test designed to execute a update transaction', async () => {
        const emmental = await Cheese.findByPk(1)

        await emmental.update({
            title: 'CHANGED'
        })

        const updatedEmmental = await Cheese.findByPk(1)

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


describe('Tests for the Board Model', () => {

    test('A test designed to execute a create and read transaction', async () => {
        createdBoard = await Board.create({
            type: 'Mixed',
            description: 'Mixed placeholder desc',
            rating: 4,
        });

        const readBoard = await Board.findOne({
            where: {
                type: 'Mixed'
            }
        });

        expect(readBoard.id).toBe(createdBoard.id);
        expect(readBoard.type).toBe(createdBoard.type);
        expect(readBoard.description).toBe(createdBoard.description);
        expect(readBoard.rating).toBe(createdBoard.rating);
    });

    test('A test designed to execute a update transaction', async () => {
        const mixedBoard = await Board.findByPk(1)

        await mixedBoard.update({
            type: 'CHANGED'
        })

        const updatedMixedBoard = await Board.findByPk(1)

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


describe('Tests for the User Model', () => {

    test('A test designed to execute a create and read transaction', async () => {
        createdUser = await User.create({
            name: 'harry',
            email: 'harry@sidaway.com'
        });

        const readUser = await User.findOne({
            where: {
                name: 'harry'
            }
        });

        expect(readUser.id).toBe(createdUser.id);
        expect(readUser.name).toBe(createdUser.name);
        expect(readUser.email).toBe(createdUser.email);


    });

    test('A test designed to execute a update transaction', async () => {
        const harry = await User.findByPk(1)

        await harry.update({
            email: 'harry@gmail.com'
        })

        const updatedHarry = await User.findByPk(1)

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
