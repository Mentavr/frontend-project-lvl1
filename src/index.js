import readlineSync from 'readline-sync';
import helpers from './helpers.js';

export default (game) => {
  const winStep = 3;
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${game.description}`);
  for (let i = 1; i <= winStep; i += 1) {
    const openGame = game.generateRound();
    console.log(`Question: ${openGame[0]}`);
    const answerQues = readlineSync.question('Your answer: ');
    if (helpers.chekAnswer(answerQues, openGame[1]) !== openGame[1]) {
      console.log(`'${answerQues}' is wrong answer ;(. Correct answer was '${openGame[1]}'\nLet's try again, ${name}!`);
      break;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
