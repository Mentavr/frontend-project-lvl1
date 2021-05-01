import randomNum from './randomNum.js';

const progressRanNum = (arr) => {
  const randNumCount = randomNum(0, arr.length - 1);
  const dotter = '..';
  arr[randNumCount] = dotter;
  return arr.join(' ');
};
export default progressRanNum;
