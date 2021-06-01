import startGame from '../index.js';
import helpers from '../helpers.js';

const getProgression = (firstNum, stepProgress, lengthProgress) => {
  const arrNumProgress = [];
  for (let i = firstNum, j = 0; j < lengthProgress; i += stepProgress, j += 1) {
    arrNumProgress.push(i);
  }
  return arrNumProgress;
};

const insertDotProgres = (arr) => {
  const firstNumber = 0;
  const randNumCount = helpers.generateRandomNumber(firstNumber, arr.length - 1);
  const dotter = '..';
  const newArr = arr;
  newArr[randNumCount] = dotter;
  return newArr.join(' ');
};

const searchIndex = (arr) => {
  let result;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === '..') {
      result = i;
    }
  }
  return result;
};

const generateRound = () => {
  const stepProgress = helpers.generateRandomNumber(2, 6);
  const firstNum = helpers.generateRandomNumber(1, 100);
  const lengthProgress = helpers.generateRandomNumber(6, 10);
  const arrGetProgression = getProgression(firstNum, stepProgress, lengthProgress);
  const serchProgressionNum = arrGetProgression.slice();
  const progression = insertDotProgres(arrGetProgression);
  const qustion = String(progression);
  const answer = String(serchProgressionNum[searchIndex(arrGetProgression)]);
  return [qustion, answer];
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame({ description, generateRound });
