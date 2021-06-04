import startGame from '../index.js';
import helpers from '../helpers.js';

const isEven = (number) => number % 2 !== 0;
const generateRound = () => {
  const qustion = `${helpers.generateRandomNumber(1, 100)}`;
  const expectedAnswer = (isEven(qustion) ? 'no' : 'yes');
  const answer = expectedAnswer;
  return [qustion, answer];
};
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

export default () => startGame({ description, generateRound });
