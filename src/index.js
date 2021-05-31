import readlineSync from 'readline-sync';
import helpers from './helpers.js';

export default (game) => {
  const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(`${game.description}`);
  for (let i = 1; i <= helpers.winNumberCounte; i += 1) {
    const [question, answer] = game.generateRound();
    console.log(`Question: ${question}`);
    const answerQues = readlineSync.question('Your answer: ');
    if (answerQues !== answer) {
      console.log(answer);
      console.log(`'${answerQues}' is wrong answer ;(. Correct answer was '${answer}'\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
