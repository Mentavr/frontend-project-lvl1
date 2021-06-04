import startGame from '../index.js';
import helpers from '../helpers.js';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const num = helpers.generateRandomNumber(1, 100);
  const isSimpleNum = (isPrime(num) === true ? 'yes' : 'no');
  const qustion = num.toString();
  const answer = isSimpleNum;
  return [qustion, answer];
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame({ description, generateRound });
