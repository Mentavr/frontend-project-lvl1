/* eslint-disable consistent-return */

// Creation random number
const createNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

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

export default {
  chekAnswer,
  createNum,
};
