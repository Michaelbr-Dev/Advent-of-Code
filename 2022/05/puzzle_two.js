/* eslint-disable no-continue */
/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-console */
/**
 * @file Puzzle two.
 * @author Michael Briquet <contact@michaelbr-dev.fr>
 */

const fs = require('fs/promises');

/**
 * @description Returns a promise. The promise is resolved with the trimmed
 * contents of the input.txt file.
 *
 * @returns {Promise<string>} Promise that is resolved.
 */
const readInput = () => fs.readFile('./input.txt', 'utf8').then((data) => data.trimEnd());

/**
 * @description Reading the input.txt file and then splitting it by new lines.
 * Splitting the data into two arrays, crates and moves.
 * Remove indexes '1 2 3 4 5 6 7 8 9'.
 * Taking the crates and putting them into columns.
 * Moving the crates from one column to another.
 * Taking the first item from each column and joining them together.
 */
readInput().then((data) => {
  const [crates, moves] = data.split('\n\n').map((n) => n.split('\n'));
  crates.pop();

  const columns = crates.reduce((cols, line) => {
    for (let i = 0; i < line.length; i += 4) {
      const crate = line
        .slice(i, i + 4)
        .trim()
        .replace(/[[\]]/g, '');
      const index = i / 4;
      if (!crate) continue;
      if (cols[index]) cols[index].push(crate);
      else cols[index] = [crate];
    }
    return cols;
  }, []);

  for (const line of moves) {
    const [, count, from, to] = line.match(/move (\d+) from (\d) to (\d)/).map((n) => +n);
    const items = columns[from - 1].splice(0, count);
    columns[to - 1].unshift(...items);
  }
  const result = columns.map((n) => n[0]).join('');

  console.log(result);
});
