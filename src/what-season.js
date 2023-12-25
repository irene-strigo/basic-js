const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }


  try {
    if (isNaN(date.getTime())) {
      throw new Error('Invalid date!')
    }

    const month = date.getMonth()

    let result = ''

    if (month >= 2 && month <= 4) {
      result = "spring"
    }

    if (month >= 5 && month <= 7) {
      result = "summer"
    }

    if (month >= 8 && month <= 10) {
      result = "fall"
    }

    if (month >= 11 || month <= 1) {
      result = "winter"
    }
    return result
  }
  catch {
    throw new Error('Invalid date!')
  }
}

module.exports = {
  getSeason
};
