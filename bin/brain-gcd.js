#!/usr/bin/env node

import readlineSync from 'readline-sync';
import randomNum from '../src/randomNum.js';
import intersection from '../src/intersectionNum.js';
import divisors from '../src/divisors.js';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

console.log(`Hello, ${name}!`);
console.log('Find the greatest common divisor of given numbers.');

let i = 1;
while (i < 4) {
  const ranNum1 = randomNum(0, 100);
  const ranNum2 = randomNum(0, 110);
  const arrNum1 = divisors(ranNum1);
  const arrNum2 = divisors(ranNum2);
  const intersectionNum = intersection(arrNum1, arrNum2);
  console.log(`Question: ${ranNum1} ${ranNum2}`);
  const answerQues = readlineSync.question('Your answer: ');
  if (intersectionNum !== Number(answerQues)) {
    console.log(`"${answerQues}" is wrong answer ;(. Correct answer was "${intersectionNum}"\nLet's try again, ${name}!`);
    break;
  } else {
    console.log('Correct!');
    i += 1;
  }
  if (i === 4) {
    console.log(`Congratulations, ${name}!`);
  }
}
