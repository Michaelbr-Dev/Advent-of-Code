/**
 * @file Puzzle two.
 * @author Michael Briquet <contact@michaelbr-dev.fr>
 */

const fs = require('fs/promises');

const table = {
  // Rock, Paper, Scissors
  A: 1,
  B: 2,
  C: 3,
  X: 0,
  Y: 3,
  Z: 6,
  // Cases
  10: 3,
  20: 1,
  30: 2,
  13: 1,
  23: 2,
  33: 3,
  16: 2,
  26: 3,
  36: 1,
};

fs.readFile('./input.txt', 'utf8').then((data) => {
  const lines = data.trim().split('\n');
  const result = lines.reduce((acc, line) => {
    const [_elf, _res] = line.split(' ');
    // eslint-disable-next-line no-underscore-dangle
    const [elf, res] = [table[_elf], table[_res]];
    const round = `${elf}${res}`;
    const count = table[round];
    return acc + count + res;
  }, 0);
  // eslint-disable-next-line no-console
  console.log(result);
});
