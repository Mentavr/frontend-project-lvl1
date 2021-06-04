import startGame from '../index.js';
import helpers from '../helpers.js';

const finedDivNumber = (num) => {
  const arrDivisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      arrDivisors.push(i);
    }
  }
  return arrDivisors;
};

const gcd = (arr1, arr2) => {
  for (let i = arr1.length - 1; i >= 0; i -= 1) {
    if (arr2[arr2.length - 1] === arr1[i]) {
      return arr1[i];
    }
  }
  arr2.pop();
  return gcd(arr1, arr2);
};

const generateRound = () => {
  const num1 = helpers.generateRandomNumber(1, 100);
  const num2 = helpers.generateRandomNumber(1, 100);
  const qustion = `${num1} ${num2}`;
  const answer = (gcd(finedDivNumber(num1), finedDivNumber(num2))).toString();
  return [qustion, answer];
};
const description = 'Find the greatest common divisor of given numbers.';

export default () => startGame({ description, generateRound });
