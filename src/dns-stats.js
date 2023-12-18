const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let variantsArr = []
  let resultArr = []
  for (let i = 0; i < domains.length; i++) {
    let elements = domains[i].split('.')
    variantsArr.push(
      elements.reverse())
    resultArr.push('.' + variantsArr[i].join('.'), '.' + variantsArr[i].slice(0, -1).join('.'), '.' + variantsArr[i].slice(0, 1).join('.'))
  }
  resultArr = resultArr.slice(0, -1)
  const obj = resultArr.reduce((acc, i) => {
    if (acc.hasOwnProperty(i)) {
      acc[i] += 1;
    } else {
      acc[i] = 1;
    }
    return acc
  }, {})
  return obj
}

module.exports = {
  getDNSStats
};
