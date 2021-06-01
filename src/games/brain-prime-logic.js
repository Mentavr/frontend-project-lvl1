import startGame from '../index.js';
import helpers from '../helpers.js';

const checksSimpleNum = (number) => {
  let result;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      result = 0;
    }
  }
  return result;
};
const generateRound = () => {
  const num = helpers.generateRandomNumber(1, 100);
  const isSimpleNum = (checksSimpleNum(num) === 0 ? 'no' : 'yes');
  const qustion = String(num);
  const answer = String(isSimpleNum);
  return [qustion, answer];
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame({ description, generateRound });
