#!/usr/bin/env node

import readlineSync from 'readline-sync';
import findeNum from '../../src/findeNum.js';
import progressRanNum from '../../src/progressRanNum.js';
import progressLogic from '../../src/progressLogic.js';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

console.log(`Hello, ${name}!`);
console.log('What number is missing in the progression?');
let i = 1;
while (i < 4) {
  const progression = progressRanNum(progressLogic());
  console.log(`Question: ${progression}`);
  const answerQues = readlineSync.question('Your answer: ');
  if (Number(answerQues) !== findeNum(progression)) {
    console.log(`"${answerQues}" is wrong answer ;(. Correct answer was "${findeNum(progression)}"\nLet's try again, ${name}!`);
    break;
  } else {
    console.log('Correct!');
    i += 1;
  }
  if (i === 4) {
    console.log(`Congratulations, ${name}!`);
  }
}
