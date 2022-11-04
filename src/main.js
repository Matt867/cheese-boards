const { Cheese, Board, User, Review } = require('../models');
const db = require('../db/db');

async function main () {
    boards = await Board.findAll()
    console.log(await updateReviewScore(boards[5]))
}


async function createNewReview (user, board, rating, review_body) {

    const rev = await Review.create({
        score: rating,
        review_body: review_body
    });

    await rev.setUser(user);
    await rev.setBoard(board);

    return rev;

}

async function createNewUser (name, email) {
    const user1 = await User.create({
        name: name,
        email: email
    });

    return user1;
}

async function updateReviewScore (board) {

    revs = await Review.findAll({where: {
        BoardId : board.id
    }}, { include: Board });

    denominator = revs.length
    let numerator = 0
    revs.map(p => numerator += p.score )

    avg = Math.round((numerator/denominator)*10)/10;

    board.update({
        rating: avg
    });

    return "DONE"

}

main()

module.exports = createNewReview
