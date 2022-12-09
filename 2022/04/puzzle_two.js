/* eslint-disable no-shadow */
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
 * @description Reading the input.txt file and then splitting it by new lines.
 *
 * @returns { Array } Array of strings representing the start and end of sections range.
 */
readInput().then((data) => {
  const result = data.split('\n').reduce((p, n) => {
    const [a, b] = n.split(',').map((n) => {
      const [sectionStart, sectionEnd] = n.split('-').map((n) => +n);
      return [sectionStart, sectionEnd];
    });

    /**
     * @description If the left side of the first array is less than or equal to the left side of the second array,
     * and the right side of the first array is greater than or equal to the right side of the second
     * array, then the first array fully contains the second array.
     *
     * @param   { number } a - The start of zone range.
     * @param   { number } b - The end of zone range.
     *
     * @returns { number }   The number of overlap zones range.
     */
    const overlap = (a, b) => {
      const leftAligned = a[0] <= b[0];
      const rightAligned = a[1] >= b[1];
      const fullyContains = leftAligned && rightAligned;
      const aFitsB = a[0] <= b[1];
      const aFitsB2 = a[1] >= b[0];
      const partial = (aFitsB && aFitsB2) || (b[0] >= a[1] && b[1] <= a[0]);
      return fullyContains || partial;
    };
    if (overlap(a, b) || overlap(b, a)) {
      return p + 1;
    }
    return p;
  }, 0);
  // eslint-disable-next-line no-console
  console.log(result);
});
