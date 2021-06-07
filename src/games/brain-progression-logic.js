import startGame from '../index.js';
import helpers from '../helpers.js';

const getProgression = (first, step, length) => {
  const progress = [];
  let lengthProgression = length;
  for (let i = first; lengthProgression >= 0; i += step, lengthProgression -= 1) {
    progress.push(i);
  }
  return progress;
};

const generateRound = () => {
  const step = helpers.generateRandomNumber(2, 6);
  const first = helpers.generateRandomNumber(1, 100);
  const progress = helpers.generateRandomNumber(6, 10);
  const progression = getProgression(first, step, progress);
  const hiddenIndex = helpers.generateRandomNumber(0, progress);
  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const qustion = progression.join(' ');
  return [qustion, answer];
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame({ description, generateRound });
