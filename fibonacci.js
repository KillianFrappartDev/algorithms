/**
 * Generate fibonacci to nth element recursively
 *
 * Example: 0, 1, 1, 2, 3, 5, 8, 13, 21
 *
 * Time Complexity: O(n)
 *
 * @param {Number} n The length of the answer
 * @return {Number} The sequence at index n
 */
// const fibonacci = (n, seq = [0, 1, 1]) => {
//   if (seq.length >= n) return seq[n - 1];

//   seq.push(seq[seq.length - 1] + seq[seq.length - 2]);

//   return fibonacci(n, seq);
// };

// const fibonacci = n => {
//   const output = [];
//   let first = 0;
//   let second = 1;

//   while (output.length < n) {
//     output.push(first);
//     [first, second] = [second, first + second];
//   }

//   return output[n - 1];
// };

const fibonacci = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n === 1) return 0;
  if (n <= 2) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
};

// Tests
const assert = require('assert');
describe('Test suite for the fibonacci function', () => {
  it('', () => assert.deepStrictEqual(fibonacci(1), 0));
  it('', () => assert.deepStrictEqual(fibonacci(5), 3));
  it('', () => assert.deepStrictEqual(fibonacci(7), 8));
  it('', () => assert.deepStrictEqual(fibonacci(8), 13));
  it('', () => assert.deepStrictEqual(fibonacci(9), 21));
  it('', () => assert.deepStrictEqual(fibonacci(13), 144));
});
