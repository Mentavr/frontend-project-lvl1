import startGame from '../index.js';
import helpers from '../helpers.js';

const generateRound = () => {
  const createOperations = () => {
    const startingPosition = 0;
    const operations = ['+', '-', '*'];
    const operationIndex = helpers.generateRandomNumber(startingPosition, operations.length);
    const operation = operations[operationIndex];
    return operation;
  };

  const checkMathemOperations = (num1, operation, num2) => {
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

  const num1 = helpers.generateRandomNumber(-10, 10);
  const num2 = helpers.generateRandomNumber(-10, 10);
  const sign = createOperations();

  const qustion = `${num1} ${sign} ${num2}`;
  const answer = String(checkMathemOperations(sign, num1, num2));
  return [qustion, answer];
};

const description = 'What is the result of the expression?';

export default () => startGame({ description, generateRound });
