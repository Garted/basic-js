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
  return Array.from(
    Array.from(
      { length: options.repeatTimes || 1 },
      () =>
        str +
        Array.from({ length: options.additionRepeatTimes || 1 }, () =>
          options.hasOwnProperty('addition') ? String(options.addition) : ''
        ).join(options.additionSeparator || '|')
    )
  ).join(options.separator || '+');
}

module.exports = {
  repeater,
};