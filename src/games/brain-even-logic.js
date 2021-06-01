import startGame from '../index.js';
import helpers from '../helpers.js';

const generateRound = () => {
  const ranNum = helpers.generateRandomNumber(1, 100);
  const isEven = (number) => number % 2 !== 0;
  const expectedAnswer = (isEven(ranNum) ? 'no' : 'yes');
  const qustion = `${ranNum}`;
  const answer = expectedAnswer;
  return [qustion, answer];
};
const description = 'Answer "yes" if the number is even, otherwise answer "no"';

export default () => startGame({ description, generateRound });
