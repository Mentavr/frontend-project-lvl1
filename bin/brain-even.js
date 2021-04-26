#!/usr/bin/env node
import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

const even = (num) => {
  if (num % 2 !== 0) {
    return false;
  }
  return true;
};

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no"');
let i = 1;
while (i < 4) {
  const randomNum = (min, max) => Math.round(min + Math.random() * (max + 1 - min));
  const ranNum = randomNum(1, 1000);
  console.log(`Question: ${ranNum}`);
  const answerQues = readlineSync.question('Your answer? ', {
    trueValue: ['yes'],
    falseValue: ['no'],
  });
  if (answerQues !== true && answerQues !== false) {
    console.log("Answer is not correct!\nLet's try again");
    break;
  }
  if (even(ranNum) === true && answerQues === true) {
    console.log('Correct!');
    i += 1;
  } else if (even(ranNum) === true && answerQues === false) {
    console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}!`);
    break;
  }
  if (even(ranNum) === false && answerQues === false) {
    console.log('Correct!');
    i += 1;
  } else if (even(ranNum) === false && answerQues === true) {
    console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`);
    break;
  }
  if (i === 4) {
    console.log(`Congratulations, ${name}!`);
  }
}
