const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const newArr = [];
  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let k = 0; k < matrix.length; k += 1) {
      if (matrix[k][i] === 0) {
        k = 0;
        break;
      } else {
        newArr.push(matrix[k][i]);
      }
    }
  }
  return newArr.reduce((a, b) => a + b, 0);
}

module.exports = {
  getMatrixElementsSum,
};
