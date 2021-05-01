#!/usr/bin/env node

import readlineSync from 'readline-sync';
import simpleNum from '../../src/simpleNum.js';
import randomNum from '../../src/randomNum.js';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

console.log(`Hello, ${name}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
let i = 1;
while (i < 4) {
  const num = randomNum(1, 100);
  console.log(`Question: ${num}`);
  const answerQues = readlineSync.question('Your answer: ');
  if (answerQues !== simpleNum(num)) {
    console.log(`"${answerQues}" is wrong answer ;(. Correct answer was "${simpleNum(num)}"\nLet's try again, ${name}!`);
    break;
  } else {
    console.log('Correct!');
    i += 1;
  }
  if (i === 4) {
    console.log(`Congratulations, ${name}!`);
  }
}
