import platform from '../index.js';
import helpers from '../helpers.js';

const logic = () => {
  const progression = helpers.progressionRanDotted(helpers.progressionLogic());

  const qustion = `${progression}`;
  const res = helpers.findeProgressionNum(progression);
  return [qustion, res];
};
const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const engine = { task, logic };
const startGame = () => platform(engine);
export default startGame;
