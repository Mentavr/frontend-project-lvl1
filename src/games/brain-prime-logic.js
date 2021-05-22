import platform from '../index.js';
import helpers from '../helpers.js';

const isSimpleNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const generateRound = () => {
  const num = helpers.createNum(1, 100);

  const qustion = `${num}`;
  const res = isSimpleNum(num);
  return [qustion, res];
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const engine = { description, generateRound };
const startGame = () => platform(engine);
export default startGame;
