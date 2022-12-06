/* eslint-disable no-shadow */
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
 * @description Reading the input.txt file and then splitting it by new lines.
 *
 * @returns { Array } Array of strings representing the start and end of sections range.
 */
readInput().then((data) => {
  const lines = data.split('\n').reduce((p, n) => {
    const [rangeSection1, rangeSection2] = n.split(',').map((n) => {
      const [sectionStart, sectionEnd] = n.split('-').map((n) => +n);
      return [sectionStart, sectionEnd];
    });

    /**
     * @description If the first range is fully contained within the second range, or the second
     * range is fully contained within the first range, then return the number of ranges plus one.
     * Otherwise, return the number of ranges.
     *
     * @param   { Array }  rangeSection1 - [0, 1].
     * @param   { Array }  rangeSection2 - [1, 5].
     *
     * @returns { number }               The number of ranges fully contained.
     */
    const fullyContained = (rangeSection1, rangeSection2) =>
      rangeSection1[0] <= rangeSection2[0] && rangeSection1[1] >= rangeSection2[1];
    if (fullyContained(rangeSection1, rangeSection2) || fullyContained(rangeSection2, rangeSection1)) {
      return p + 1;
    }
    return p;
  }, 0);
  // eslint-disable-next-line no-console
  console.log(lines);
});
