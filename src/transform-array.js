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
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let controls = ['--double-next', '--double-prev', '--discard-prev', '--discard-next']
  let cloneArr = arr.slice(0)
  for (let i = 0; i < cloneArr.length; i++) {
    let element = cloneArr[i]
    let idx = cloneArr.indexOf(element)
    if (element === '--double-next') {
      idx === cloneArr.length - 1 ? cloneArr.splice(idx, 1) : cloneArr.splice(idx, 1, cloneArr[i + 1])
    }
    if (element === '--double-prev') {

      idx === 0 ? cloneArr.splice(idx, 1) : cloneArr.splice(idx, 1, cloneArr[i - 1])
    }
    if (element === '--discard-prev') {
      idx === 0 ? cloneArr.splice(idx, 1) : cloneArr.splice(idx - 1, 2)
    }
    if (element === '--discard-next') {
      idx === cloneArr.length - 1 ? cloneArr.splice(idx, 1) : cloneArr.splice(idx, 2)
    }
  }
  return cloneArr.filter((el) => !controls.includes(el))

}

module.exports = {
  transform
};
