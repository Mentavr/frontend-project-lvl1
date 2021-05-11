import platform from '../index.js';
import helpers from '../helpers.js';

const logic = () => {
  const ranNum1 = helpers.randomNum(-10, 10);
  const ranNum2 = helpers.randomNum(-10, 10);
  const ranSig = helpers.randomSign();

  const qustion = `${ranNum1} ${ranSig} ${ranNum2}`;
  const res = helpers.mathemOperations(ranSig, ranNum1, ranNum2);
  return [qustion, res];
};
const task = 'What is the result of the expression?';

const engine = { task, logic };
const startGame = () => platform(engine);
export default startGame;
