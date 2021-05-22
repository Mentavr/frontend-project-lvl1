import platform from '../index.js';
import helpers from '../helpers.js';

const createSign = () => {
  const computationSign = helpers.createNum(0, 2);
  const sign = ['+', '-', '*'];
  const randomComputationSign = sign[computationSign];
  return randomComputationSign;
};

const checkMathemOperations = (sing, num1, num2) => {
  switch (sing) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${sing}'!`);
  }
};

const generateRound = () => {
  const num1 = helpers.createNum(-10, 10);
  const num2 = helpers.createNum(-10, 10);
  const sign = createSign();

  const qustion = `${num1} ${sign} ${num2}`;
  const res = checkMathemOperations(sign, num1, num2);
  return [qustion, res];
};
const description = 'What is the result of the expression?';

const engine = { description, generateRound };
const startGame = () => platform(engine);
export default startGame;
