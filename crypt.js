/**
 * A cryptarithm is a mathematical puzzle for which the goal is to find the correspondence between letters
 * and digits, such that the given arithmetic equation consisting
 * of letters holds true when the letters are converted to digits.
 *
 * If the decrypted answer is a valid equation does not contain leading zeroes, return true.
 *
 * Time Complexity: ??
 *
 * @param {String[]} crypt An array of words
 * @param {Array[]} solution Mapping of letters and digits
 * @return {Boolean} Result is a valid equation or not
 */
const crypt = (crypt, solution) => {
  const numbers = [];
  for (const word of crypt) {
    const number = [];
    for (const char of word) {
      let digit;
      for (const pair of solution) {
        if (pair.includes(char)) digit = pair[1];
      }
      number.push(digit);
    }
    numbers.push(number);
  }

  for (const number of numbers) {
    if (number.length > 1 && number[0] === '0') return false;
  }

  const math = parseInt(numbers[0].join('')) + parseInt(numbers[1].join(''));
  const result = parseInt(numbers[2].join(''));
  return result === math;
};

// Tests 🌟
const assert = require('assert');
const inputs = [
  ['SEND', 'MORE', 'MONEY'],
  [
    ['O', '0'],
    ['M', '1'],
    ['Y', '2'],
    ['E', '5'],
    ['N', '6'],
    ['D', '7'],
    ['R', '8'],
    ['S', '9']
  ],
  ['TEN', 'TWO', 'ONE'],
  [
    ['O', '1'],
    ['T', '0'],
    ['W', '9'],
    ['E', '5'],
    ['N', '4']
  ]
];
const outputs = [true, false];

crypt(inputs[0], inputs[1]);

describe('Test suite for the crypt function', () => {
  it('Is it a valid crypt?', () => assert.deepStrictEqual(crypt(inputs[0], inputs[1]), outputs[0]));
  it('Is it a valid crypt?', () => assert.deepStrictEqual(crypt(inputs[2], inputs[3]), outputs[1]));
});
