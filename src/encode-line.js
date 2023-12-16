const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let length = str.length;
  let arr = []
  for (let i = 0; i < length; i++) {
    let count = 1;
    while (i < length - 1 && str[i] === str[i + 1]) {
      count++;
      i++;
    }
    arr.push(count, str[i])

  }
  return arr.filter(item => item != 1).join('')
}

module.exports = {
  encodeLine
};
