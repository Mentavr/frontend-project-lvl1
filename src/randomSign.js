import randomNum from './randomNum.js';

const randomSign = () => {
  const computationSign = randomNum(0, 2);
  const sign = ['+', '-', '*'];
  const randomComputationSign = sign[computationSign];
  return randomComputationSign;
};
export default randomSign;
