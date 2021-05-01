#!/usr/bin/env node
import readlineSync from 'readline-sync';
import mathemOperations from '../src/mathemOperations.js';
import randomNum from '../src/randomNum.js';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');

console.log(`Hello, ${name}!`);
console.log('What is the result of the expression?');

let i = 1;
while (i < 4) {
  const computationSign = randomNum(0, 2);
  const sign = ['+', '-', '*'];
  const randomComputationSign = sign[computationSign];
  const ranNum1 = randomNum(0, 10);
  const ranNum2 = randomNum(0, 10);
  console.log(`Question: ${ranNum1}${randomComputationSign}${ranNum2}`);
  const sumRanNum = mathemOperations(randomComputationSign, ranNum1, ranNum2);
  const answerQues = readlineSync.question('Your answer: ');
  if (Number(answerQues) !== sumRanNum) {
    console.log(`"${answerQues}" is wrong answer ;(. Correct answer was "${sumRanNum}"\nLet's try again, ${name}!`);
    break;
  } else {
    console.log('Correct!');
    i += 1;
  }
  if (i === 4) {
    console.log(`Congratulations, ${name}!`);
  }
}
