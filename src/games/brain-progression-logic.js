import startGame from '../index.js';
import helpers from '../helpers.js';

const getProgression = (first, step, length) => {
  const arrNumProgress = [];
  let lengthProgression = length;
  for (let i = first; lengthProgression >= 0; i += step, lengthProgression -= 1) {
    arrNumProgress.push(i);
  }
  return arrNumProgress;
};

const generateRound = () => {
  const stepProgress = helpers.generateRandomNumber(2, 6);
  const firstNum = helpers.generateRandomNumber(1, 100);
  const lengthProgress = helpers.generateRandomNumber(6, 10);
  const arrGetProgression = getProgression(firstNum, stepProgress, lengthProgress);
  const indexProgress = helpers.generateRandomNumber(0, lengthProgress);
  const answer = arrGetProgression[indexProgress].toString();
  arrGetProgression[indexProgress] = '..';
  const qustion = arrGetProgression.join(' ');
  return [qustion, answer];
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame({ description, generateRound });
