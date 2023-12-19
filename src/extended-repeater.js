const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = str + ''
  options.addition = options.addition + ''
  if (!options.separator) {
    options.separator = '+';
  }
  if (!options.additionSeparator) {
    options.additionSeparator = '|';
  }
  let additionReady = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes - 1) + options.addition
  if (options.addition === 'undefined') {
    additionReady = ''
  }
  let stringReady = (str + additionReady + options.separator).repeat(options.repeatTimes - 1) + str + additionReady
  return stringReady;
}

module.exports = {
  repeater
};
