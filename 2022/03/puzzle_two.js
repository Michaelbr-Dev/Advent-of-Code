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
const readInput = () => fs.readFile('./input.txt', 'utf8').then((data) => data.trim());

/**
 * @description Splits the input.txt file into three-line groups.
 * Set the unique character, compare the characters to find the common in the group of three lines.
 * Defines the priority of the common character.
 *
 * @returns String - The sum of the priorities of each rucksacks.
 */

readInput().then((data) => {
  const lines = data.split('\n');

  const groups = lines.reduce(
    (p, n) => {
      const g = p.at(-1);
      if (p.at(-1).length >= 3) {
        p.push([n]);
      } else {
        g.push(n);
      }
      return p;
    },
    [[]],
  );
  const sum = groups.reduce((acc, g) => {
    const [a, b, c] = g.map((n) => [...new Set(n)]);
    const [matchItem] = a.filter((n) => b.includes(n)).filter((n) => c.includes(n));
    const groupCode = matchItem.charCodeAt(0);
    let priority;
    if (groupCode >= 97) {
      priority = groupCode - 96;
    } else {
      priority = groupCode - 64 + 26;
    }
    return acc + priority;
  }, 0);
  // eslint-disable-next-line no-console
  console.log(sum);
});
