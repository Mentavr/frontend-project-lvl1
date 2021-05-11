import platform from '../index.js';
import helpers from '../helpers.js';

const logic = () => {
  const ranNum = helpers.randomNum(1, 100);

  const qustion = `${ranNum}`;
  const res = helpers.even(ranNum);
  return [qustion, res];
};
const task = 'Answer "yes" if the number is even, otherwise answer "no"';

const engine = { task, logic };
const startGame = () => platform(engine);
export default startGame;
