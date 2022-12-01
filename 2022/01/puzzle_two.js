/**
 * @file Puzzle one.
 * @author Michael Briquet <contact@michaelbr-dev.fr>
 */

const fs = require('fs/promises');

fs.readFile('./input.txt', 'utf8').then((data) => {
  const [solA, solB, solC] = data
    .split('\n\n')
    // eslint-disable-next-line no-shadow
    .map((n) => n.split('\n').reduce((p, n) => p + +n, 0))
    .sort((a, b) => b - a);
  // eslint-disable-next-line no-console
  console.log(solA + solB + solC);
});
