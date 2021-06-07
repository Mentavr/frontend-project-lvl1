import startGame from '../index.js';
import helpers from '../helpers.js';

const gcd = (num1, num2) => {
  if (!num2) {
    return num1;
  }
  return gcd(num2, num1 % num2);
};

const generateRound = () => {
  const num1 = helpers.generateRandomNumber(1, 100);
  const num2 = helpers.generateRandomNumber(1, 100);
  const qustion = `${num1} ${num2}`;
  const answer = (gcd(num1, num2)).toString();
  return [qustion, answer];
};
const description = 'Find the greatest common divisor of given numbers.';

export default () => startGame({ description, generateRound });
