import platform from '../index.js';
import helpers from '../helpers.js';

const logic = () => {
  const ranNum = helpers.randomNum(1, 100);

  const qustion = `${ranNum}`;
  const res = helpers.simpleNum(ranNum);
  return [qustion, res];
};
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const engine = { task, logic };
const startGame = () => platform(engine);
export default startGame;
