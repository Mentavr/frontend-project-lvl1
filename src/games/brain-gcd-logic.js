import startGame from '../index.js';
import helpers from '../helpers.js';

const finedDivisorsNumber = (num) => {
  const arrDivisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      arrDivisors.push(i);
    }
  }
  return arrDivisors;
};

const gcd = (num1, num2) => {
  const arrdivisors1 = finedDivisorsNumber(num1);
  const arrdivisors2 = finedDivisorsNumber(num2);
  let result;
  for (let i = arrdivisors1.length - 1; i >= 0; i -= 1) {
    const j = arrdivisors2.indexOf(arrdivisors1[i]);
    if (arrdivisors1[i] === arrdivisors2[j]) {
      result = arrdivisors2[j];
      break;
    }
  }
  return result;
};

const generateRound = () => {
  const num1 = helpers.generateRandomNumber(1, 100);
  const num2 = helpers.generateRandomNumber(1, 100);
  const intersectionNumbers = gcd(num1, num2);
  const qustion = `${num1} ${num2}`;
  const answer = String(intersectionNumbers);
  return [qustion, answer];
};
const description = 'Find the greatest common divisor of given numbers.';

export default () => startGame({ description, generateRound });
