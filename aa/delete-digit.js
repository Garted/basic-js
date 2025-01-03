const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
    const numsArr = [];
    const arr = String(n).split('');
    for (let i = 0; i < arr.length; i += 1) {
        numsArr.push(+arr.filter((_, index) => index !== i).join(''));
    }
    return numsArr.sort((a, b) => a - b).at(-1);
}
module.exports = {
    deleteDigit,
};
