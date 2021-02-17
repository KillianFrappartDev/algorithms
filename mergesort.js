/**
 * Merge sorting is an efficient sorting algorithm that
 * splits an array in two parts and sort them before it
 * merge them in one single sorted array.
 *
 * Time Complexity: O(n log n)
 *
 * @param {Array} arr The unsorted array.
 * @return {Array} The sorted array.
 */
const mergeSort = arr => {
  if (arr.length === 1) return arr;

  const left = arr.slice(0, arr.length / 2);
  const right = arr.slice(arr.length / 2, arr.length);

  return sortHelper(mergeSort(left), mergeSort(right));
};

/**
 * Helper function that is responsible for merging the
 * left and the right array.
 *
 * @param {Array} left The left array
 * @param {Array} right The right array
 * @return {Array} The merged array
 */
const sortHelper = (l, r) => {
  const output = [];

  while (l.length && r.length) {
    if (l[0] < r[0]) output.push(l.shift());
    else output.push(r.shift());
  }

  while (l.length) output.push(l.shift());
  while (r.length) output.push(r.shift());

  return output;
};

// Tests
const assert = require('assert');
describe('Test suite for the merge sort algorithm', () => {
  it('should return [1, 2, 3, 4]', () => assert.deepStrictEqual(mergeSort([2, 3, 4, 1]), [1, 2, 3, 4]));
  it('should return [12, 15, 20, 21]', () => assert.deepStrictEqual(mergeSort([20, 15, 21, 12]), [12, 15, 20, 21]));
  it('should return [10, 20, 30, 40, 50]', () => assert.deepStrictEqual(mergeSort([30, 50, 10, 40]), [10, 30, 40, 50]));
});
