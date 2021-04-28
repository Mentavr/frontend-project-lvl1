const intersection = (arr1, arr2) => {
  for (let i = arr1.length - 1; i >= 0; i -= 1) {
    const j = arr2.indexOf(arr1[i]);
    if (arr1[i] === arr2[j]) {
      const numbInt = arr1[i];
      return numbInt;
    }
  }
};
export default intersection;
