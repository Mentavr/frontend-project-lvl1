const mathemOperations = (sing, num1, num2) => {
  if (sing === '+') {
    return num1 + num2;
  }
  if (sing === '-') {
    return num1 - num2;
  }
  if (sing === '*') {
    return num1 * num2;
  }
};
export default mathemOperations;
