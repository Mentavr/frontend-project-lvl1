import platform from '../index.js';
import helpers from '../helpers.js';

const createProgressionLogic = () => {
  const arrNumProgress = [];
  const stepProgress = helpers.createNum(2, 6);
  const firstNum = helpers.createNum(1, 100);
  const lengthProgress = helpers.createNum(6, 10);
  for (let i = firstNum, j = 0; j < lengthProgress; i += stepProgress, j += 1) {
    arrNumProgress.push(i);
  }
  return arrNumProgress;
};

const insertDottedProgression = (arr) => {
  const randNumCount = helpers.createNum(0, arr.length - 1);
  const dotter = '..';
  const newArr = arr;
  newArr[randNumCount] = dotter;
  return newArr.join(' ');
};

const serchProgressionNum = (str) => {
  let result = 0;
  const strArr = str.split(' ');
  for (let i = 1; i <= strArr.length - 2; i += 1) {
    if (strArr[0] === '..' || strArr[strArr.length - 1] === '..') {
      const step = (strArr[2] - strArr[1]);
      if (strArr[0] === '..') {
        result = strArr[1] - step;
      } else if (strArr[strArr.length - 1] === '..') {
        result = Number(strArr[strArr.length - 2]) + step;
      }
    }
    if (strArr[i] === '..') {
      result = Number(strArr[i - 1]) + (Number(strArr[i + 1] - strArr[i - 1]) / 2);
    }
  }
  return result;
};

const generateRound = () => {
  const progression = insertDottedProgression(createProgressionLogic());

  const qustion = `${progression}`;
  const res = serchProgressionNum(progression);
  return [qustion, res];
};
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const engine = { description, generateRound };
const startGame = () => platform(engine);
export default startGame;
