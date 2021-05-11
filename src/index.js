import readlineSync from 'readline-sync';
import helpers from './helpers.js';

const platform = (game) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${game.task}`);
  let i = 1;
  while (i <= 3) {
    const openGame = game.logic();
    console.log(`Question: ${openGame[0]}`);
    const answerQues = readlineSync.question('Your answer: ');
    if (helpers.chekAnswer(answerQues, openGame[1]) !== openGame[1]) {
      console.log(`'${answerQues}' is wrong answer ;(. Correct answer was '${openGame[1]}'\nLet's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
      i += 1;
    }
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
export default platform;
