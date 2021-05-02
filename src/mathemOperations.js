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
export default mathemOperations;
