import platform from '../index.js';
import helpers from '../helpers.js';

const logic = () => {
  const ranNum1 = helpers.randomNum(0, 100);
  const ranNum2 = helpers.randomNum(0, 100);
  const arrdivisors1 = helpers.divisorsNumber(ranNum1);
  const arrdivisors2 = helpers.divisorsNumber(ranNum2);
  const intersectionNumbers = helpers.intersection(arrdivisors1, arrdivisors2);
  const qustion = `${ranNum1} ${ranNum2}`;
  const res = intersectionNumbers;
  return [qustion, res];
};
const task = 'Find the greatest common divisor of given numbers.';

const engine = { task, logic };
const startGame = () => platform(engine);
export default startGame;
