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
 * @description Reading the input.txt file and then printing the index of the first four consecutive
 * characters that are different.
 */
readInput().then((data) => {
  const charData = data;
  for (let i = 0; i < charData.length - 14; i += 1) {
    const temp = charData.slice(i, i + 14);
    if (new Set(temp).size === 14) {
      console.log(i + 14);
      break;
    }
  }
});
