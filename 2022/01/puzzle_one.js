/**
 * @file Puzzle one.
 * @author Michael Briquet <contact@michaelbr-dev.fr>
 */

const fs = require('fs/promises');

fs.readFile('./input.txt', 'utf8').then((data) => {
  const [solution] = data
    .split('\n\n')
    .map((n) => n.split('\n').reduce((a, b) => a + +b, 0))
    .sort((a, b) => b - a);
  // eslint-disable-next-line no-console
  console.log(solution);
});
