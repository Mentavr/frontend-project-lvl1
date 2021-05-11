import readlineSync from 'readline-sync';

const name = readlineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
const startGame = () => console.log(`Hello, ${name}!`);
export default startGame;
