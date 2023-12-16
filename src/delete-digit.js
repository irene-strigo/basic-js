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
  let arr = String(n).split('').map(Number)
  let variants = []
  for (let i = 0; i < arr.length; i++) {
    variants.push(
      Number(arr.filter((el, idx) => idx !== i).join(''))
    )
  }
  variants = variants.sort((a, b) => b - a)
  return variants[0]
}

module.exports = {
  deleteDigit
};
