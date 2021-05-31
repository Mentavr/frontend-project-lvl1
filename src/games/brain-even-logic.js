import platform from '../index.js';
import helpers from '../helpers.js';

const checkParity = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

const generateRound = () => {
  const ranNum = helpers.generateRandomNumber(1, 100);

  const qustion = `${ranNum}`;
  const res = String(checkParity(ranNum));
  return [qustion, res];
};
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const engine = { description, generateRound };
const startGame = () => platform(engine);
export default startGame;
