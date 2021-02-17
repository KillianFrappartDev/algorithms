/**
 * Write a bubble sort algorithm.
 * This algorithms sorts an array of integer.
 *
 * Time Complexity: O(n^2)
 *
 * @param {Array} arr The array to sort
 * @return {Array} The sorted Array
 */
const bubble = arr => {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return arr;
};

// Tests
const assert = require('assert');
describe('Test suite for the bubble sort algorithm', () => {
  const inputs = [
    [4, 3, 7, 1],
    [9, 9, 7, 23, 1, -5],
    [2, -2, 3, 5, 32, 1]
  ];
  for (const input of inputs) {
    it('Should return a sorted array', () =>
      assert.deepStrictEqual(
        bubble(input),
        input.sort((a, b) => a - b)
      ));
  }
});
