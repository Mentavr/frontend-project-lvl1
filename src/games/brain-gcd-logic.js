import platform from '../index.js';
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

// eslint-disable-next-line consistent-return
const finedIntersectionArr = (arr1, arr2) => {
  for (let i = arr1.length - 1; i >= 0; i -= 1) {
    const j = arr2.indexOf(arr1[i]);
    if (arr1[i] === arr2[j]) {
      return arr2[j];
    }
  }
};

const generateRound = () => {
  const num1 = helpers.createNum(0, 100);
  const num2 = helpers.createNum(0, 100);
  const arrdivisors1 = finedDivisorsNumber(num1);
  const arrdivisors2 = finedDivisorsNumber(num2);
  const intersectionNumbers = finedIntersectionArr(arrdivisors1, arrdivisors2);
  const qustion = `${num1} ${num2}`;
  const res = intersectionNumbers;
  return [qustion, res];
};
const description = 'Find the greatest common divisor of given numbers.';

const engine = { description, generateRound };
const startGame = () => platform(engine);
export default startGame;
