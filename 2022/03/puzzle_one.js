/**
 * @file Puzzle one.
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
 * @description Split input.txt file into lines, set two equal strings per line,
 * define the unique characters, compare the characters to find the common to the two strings,
 * sets compartments priority.
 *
 * @returns String - The sum of the priorities of each rucksack.
 */
readInput().then((data) => {
  const lines = data.split('\n');
  const sum = lines.reduce((acc, line) => {
    const half = line.length / 2;
    const [firstCompStr, secondCompStr] = [line.slice(0, half), line.slice(half)];
    const [firstCompSet, secondCompSet] = [new Set(firstCompStr), new Set(secondCompStr)];
    const [firstCompArr, secondCompArr] = [[...firstCompSet], [...secondCompSet]];
    const [matchItem] = firstCompArr.filter((n) => secondCompArr.includes(n));
    const itemCode = matchItem.charCodeAt(0);

    let priority;
    if (itemCode >= 97) {
      priority = itemCode - 96;
    } else {
      priority = itemCode - 64 + 26;
    }
    // eslint-disable-next-line no-console
    console.log(matchItem, itemCode, priority);

    return acc + priority;
  }, 0);

  // eslint-disable-next-line no-console
  console.log(sum);
});
