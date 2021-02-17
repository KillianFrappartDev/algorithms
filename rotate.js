/**
 * Rotate a 2D matrix by 90 degrees.
 *
 * Time Complexity: O(n)
 *
 * @param {Array[]} mat Matrix 2D
 * @return {Array[]} New matrix
 */
const rotate = mat => {
  const output = mat.map(arr => [...arr]);
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[i].length; j++) {
      output[j][mat.length - 1 - i] = mat[i][j];
    }
  }
  return output;
};

// Test
const assert = require('assert');

const input = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const output = [
  [7, 4, 1],
  [8, 5, 2],
  [9, 6, 3]
];

describe('Test suite for the rotate function', () => {
  it('should rotate the matrix', () => assert.deepStrictEqual(rotate(input), output));
});
