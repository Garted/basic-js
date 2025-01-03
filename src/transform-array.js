const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let i = 0;

  if (arr.length === 0) {
    return result;
  }

  while (i < arr.length) {
    const current = arr[i];

    if (current === '--double-next' && i < arr.length - 1) {
      result.push(arr[i + 1]);
    } else if (current === '--discard-prev' && i > 0) {
      result.pop();
    } else if (current === '--discard-next' && i < arr.length - 1) {
      i += 2;
    } else if (
      current === '--double-prev' &&
      i > 0 &&
      arr[i - 2] !== '--discard-next'
    ) {
      result.push(result[result.length - 1]);
    } else if (
      current !== '--double-next' &&
      current !== '--discard-prev' &&
      current !== '--discard-next' &&
      current !== '--double-prev'
    ) {
      result.push(current);
    }

    i++;
  }

  return result;
}

module.exports = {
  transform,
};
