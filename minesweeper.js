/**
 * The minesweeper game consist of a 2D matrix containing mines.
 * Each cell represents an intger that indicates the number of mines
 * living in the neighboring cells.
 *
 * Time Complexity: O(n^2)
 *
 * @param {Array} matrix An array of boolean array
 * @return {Array} An array of integers array
 */
const minesweeper = matrix => {
  const board = [];
  for (let i = 0; i < matrix.length; i++) {
    board[i] = new Array(matrix[0].length).fill(0);
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j]) {
        if (board[i - 1] ?? false) {
          if (board[i - 1][j - 1] !== undefined) board[i - 1][j - 1] += 1;
          if (board[i - 1][j] !== undefined) board[i - 1][j] += 1;
          if (board[i - 1][j + 1] !== undefined) board[i - 1][j + 1] += 1;
        }

        if (board[i][j - 1] !== undefined) board[i][j - 1] += 1;
        if (board[i][j + 1] !== undefined) board[i][j + 1] += 1;

        if (board[i + 1] ?? false) {
          if (board[i + 1][j - 1] !== undefined) board[i + 1][j - 1] += 1;
          if (board[i + 1][j] !== undefined) board[i + 1][j] += 1;
          if (board[i + 1][j + 1] !== undefined) board[i + 1][j + 1] += 1;
        }
      }
    }
  }

  return board;
};

minesweeper([
  [true, false, false],
  [false, true, false],
  [false, false, false]
]);

const assert = require('assert');
describe('Test suite for the minesweeper function', () => {
  const inputs = [
    [
      [true, false, false],
      [false, true, false],
      [false, false, false]
    ],
    [
      [false, false, false],
      [false, false, false]
    ],
    [
      [true, false, false, true],
      [false, false, true, false],
      [true, true, false, true]
    ],
    [
      [true, true, true],
      [true, true, true],
      [true, true, true]
    ]
  ];
  const outputs = [
    [
      [1, 2, 1],
      [2, 1, 1],
      [1, 1, 1]
    ],
    [
      [0, 0, 0],
      [0, 0, 0]
    ],
    [
      [0, 2, 2, 1],
      [3, 4, 3, 3],
      [1, 2, 3, 1]
    ],
    [
      [3, 5, 3],
      [5, 8, 5],
      [3, 5, 3]
    ]
  ];
  for (let i = 0; i < inputs.length; i++) {
    it('Should return the new matrix.', () => assert.deepStrictEqual(minesweeper(inputs[i]), outputs[i]));
  }
});
