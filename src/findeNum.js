const findeNum = (str) => {
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
export default findeNum;
