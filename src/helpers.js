// Creation random number
const generateRandomNumber = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

//Step win
const winNumberCounte = 3;

export default {
  generateRandomNumber,
  winNumberCounte
};
