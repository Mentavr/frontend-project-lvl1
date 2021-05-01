import randomNum from './randomNum.js';

const progressRanNum = (arr) => {
  const randNumCount = randomNum(0, arr.length - 1);
  const dotter = '..';
  const newArr = arr;
  newArr[randNumCount] = dotter;
  return newArr.join(' ');
};
export default progressRanNum;
