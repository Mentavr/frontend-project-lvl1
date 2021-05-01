import randomNum from './randomNum.js';

const progressLogic = () => {
  const arrNumProgress = [];
  const stepProgress = randomNum(2, 6);
  const firstNum = randomNum(1, 100);
  const lengthProgress = randomNum(6, 10);
  for (let i = firstNum, j = 0; j < lengthProgress; i += stepProgress, j += 1) {
    arrNumProgress.push(i);
  }
  return arrNumProgress;
};
export default progressLogic;
