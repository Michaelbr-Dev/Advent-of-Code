/**
 * @file Puzzle one.
 * @author Michael Briquet <contact@michaelbr-dev.fr>
 */

const fs = require('fs/promises');

const table = {
  // Rock, Paper, Scissors
  A: 1,
  B: 2,
  C: 3,
  X: 1,
  Y: 2,
  Z: 3,
  // Cases
  11: 3,
  22: 3,
  33: 3,
  12: 6,
  21: 0,
  23: 6,
  32: 0,
  31: 6,
  13: 0,
};

fs.readFile('./input.txt', 'utf8').then((data) => {
  const lines = data.trim().split('\n');
  const result = lines.reduce((acc, line) => {
    const [_elf, _me] = line.split(' ');
    // eslint-disable-next-line no-underscore-dangle
    const [elf, me] = [table[_elf], table[_me]];
    const round = `${elf}${me}`;
    const count = table[round];
    return acc + count + me;
  }, 0);
  // eslint-disable-next-line no-console
  console.log(result);
});
