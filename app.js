const Transition = require('./core/transition');
const Block = require('./core/block');

const transition = new Transition();

transition.makeTransition(new Block(1, {'amount': 5000, 'from': 'User-2', 'to': "User-3"},  Date.now(),));
transition.makeTransition(new Block(2, {'amount': 4000, 'from': 'User-3', 'to': "User-4"},  Date.now(),));
transition.makeTransition(new Block(3, {'amount': 3000, 'from': 'User-4', 'to': "User-5"},  Date.now(),));
transition.makeTransition(new Block(4, {'amount': 2000, 'from': 'User-5', 'to': "User-6"},  Date.now(),));

console.log(transition.chain.blockchain);