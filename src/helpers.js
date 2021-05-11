/* eslint-disable consistent-return */

// Creation random number
const randomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// Check answer
const chekAnswer = (answer, question) => {
  let result;
  if (typeof question === 'number') {
    result = Number(answer);
  } else {
    result = answer;
  }
  return result;
};

// Fined divisors number
const divisorsNumber = (num) => {
  const arrDivisors = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      arrDivisors.push(i);
    }
  }
  return arrDivisors;
};

// Even number
const even = (num) => {
  if (num % 2 !== 0) {
    return 'no';
  }
  return 'yes';
};

// Serch number progression
const findeProgressionNum = (str) => {
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

// Intersection arrey
const intersection = (arr1, arr2) => {
  for (let i = arr1.length - 1; i >= 0; i -= 1) {
    const j = arr2.indexOf(arr1[i]);
    if (arr1[i] === arr2[j]) {
      return arr2[j];
    }
  }
};

// Identification mathematical sign
const mathemOperations = (sing, num1, num2) => {
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

// Creation mathematical progression
const progressionLogic = () => {
  const arrNumProgress = [];
  const stepProgress = randomNum(2, 6);
  const firstNum = randomNum(1, 100);
  const lengthProgress = randomNum(6, 10);
  for (let i = firstNum, j = 0; j < lengthProgress; i += stepProgress, j += 1) {
    arrNumProgress.push(i);
  }
  return arrNumProgress;
};

// Replacement number in progression  on points
const progressionRanDotted = (arr) => {
  const randNumCount = randomNum(0, arr.length - 1);
  const dotter = '..';
  const newArr = arr;
  newArr[randNumCount] = dotter;
  return newArr.join(' ');
};

// Check simple number
const simpleNum = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

// Random sign
const randomSign = () => {
  const computationSign = randomNum(0, 2);
  const sign = ['+', '-', '*'];
  const randomComputationSign = sign[computationSign];
  return randomComputationSign;
};

export default {
  chekAnswer,
  divisorsNumber,
  even,
  findeProgressionNum,
  intersection,
  mathemOperations,
  progressionLogic,
  progressionRanDotted,
  randomNum,
  simpleNum,
  randomSign,
};
