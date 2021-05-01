#!/usr/bin/env node
import readlineSync from 'readline-sync';
import mathemOperations from '../../src/mathemOperations.js';
import randomNum from '../../src/randomNum.js';
import randomSign from '../../src/randomSign.js';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

let i = 1;
while (i < 4) {
  const ranNum1 = randomNum(-10, 10);
  const ranNum2 = randomNum(-10, 10);
  const ranSig = randomSign();
  const sumRanNum = mathemOperations(ranSig, ranNum1, ranNum2);
  console.log(`Question: ${ranNum1} ${ranSig} ${ranNum2}`);
  const answerQues = readlineSync.question('Your answer: ');
  if (Number(answerQues) !== sumRanNum) {
    console.log(`'${answerQues}' is wrong answer ;(. Correct answer was '${sumRanNum}'\nLet's try again, ${name}!`);
    break;
  } else {
    console.log('Correct!');
    i += 1;
  }
  if (i === 4) {
    console.log(`Congratulations, ${name}!`);
  }
}
