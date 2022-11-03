const Cheese = require('./cheese.model');
const Board = require('./Board.model');
const User = require('./User.model');

/* DEFINE RELATIONSHIPS WITHIN THIS FILE
*****************************************/

/* ONE ==> MANY: USER ==> BOARD */
User.hasMany(Board);
Board.belongsTo(User);

/* MANY ==> MANY: CHEESE ==> BOARD */
Board.belongsToMany(Cheese, { through: 'Board_Cheese' });
Cheese.belongsToMany(Board, { through: 'Board_Cheese' });

module.exports = {
    Cheese,
    Board,
    User
}
