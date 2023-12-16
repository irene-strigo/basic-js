const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let digits = []
  let ones = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != -1) {
      ones.push('*')
      digits.push(arr[i])
    } else {
      ones.push(arr[i])
    }
  }
  digits.sort((a, b) => a - b)
  let result = []
  for (let i = 0; i < ones.length; i++) {

    if (ones[i] === '*') {
      result.push(digits.shift())
    } else {
      result.push(ones[i])
    }
  }
  return result
}

module.exports = {
  sortByHeight
};
