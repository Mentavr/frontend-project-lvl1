import startGame from '../index.js';
import helpers from '../helpers.js';

const calculate = (num1, num2, operation) => {
  switch (operation) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown order state: '${operation}'!`);
  }
};

export const operations = ['+', '-', '*'];

const generateRound = () => {
  const operationIndex = helpers.generateRandomNumber(0, operations.length - 1);
  const operation = operations[operationIndex];
  const num1 = helpers.generateRandomNumber(-10, 10);
  const num2 = helpers.generateRandomNumber(-10, 10);
  const qustion = `${num1} ${operation} ${num2}`;
  const answer = String(calculate(num1, num2, operation));
  return [qustion, answer];
};

const description = 'What is the result of the expression?';

export default () => startGame({ description, generateRound });
