const Cheese = require('./cheese.model');
const Board = require('./board.model');
const User = require('./user.model');
const Review = require('./review.model')

/* DEFINE RELATIONSHIPS WITHIN THIS FILE
*****************************************/

/* ONE ==> MANY: USER ==> BOARD */
User.hasMany(Board);
Board.belongsTo(User);

/* MANY ==> MANY: CHEESE ==> BOARD */
Board.belongsToMany(Cheese, { through: 'Board_Cheese' });
Cheese.belongsToMany(Board, { through: 'Board_Cheese' });

/* ONE USER CAN HAVE MANY REVIEWS: ONE ==> MANY */
User.hasMany(Review);
Review.belongsTo(User);

/* ONE BOARD CAN HAVE MANY REVIEWS: ONE ==> MANY */
Board.hasMany(Review);
Review.belongsTo(Board);

module.exports = {
    Cheese,
    Board,
    User,
    Review
}
