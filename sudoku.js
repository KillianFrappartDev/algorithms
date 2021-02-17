/**
 * Given a 9 x 9 matrix, validate the sudoku.
 * Each row, column and 3 x 3 grids should not contain duplicates.
 *
 * Time Complexity: ??
 *
 * @param {Array[]} mat The matrix to check
 * @return {boolean} Wether it is valid or not
 */
const checkSudoku = mat => {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const current = mat[i][j];
      if (current === '.') continue;

      for (let k = 0; k < 9; k++) {
        //Rows
        if (k !== j && current === mat[i][k]) return false;
        //Columns
        if (k !== i && current === mat[k][j]) return false;
      }

      //Grids
      const a = i - (i % 3);
      const b = j - (j % 3);
      for (let k = a; k < a + 3; k++) {
        for (let l = b; l < b + 3; l++) {
          if (k !== i && l !== j && mat[k][l] === current) return false;
        }
      }
    }
  }
  return true;
};

//Test
const assert = require('assert');

const inputs = [
  [
    ['.', '.', '.', '1', '4', '.', '.', '2', '.'],
    ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
    ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
    ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
    ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
    ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
    ['.', '.', '.', '5', '.', '.', '.', '7', '.']
  ],
  [
    ['.', '.', '.', '.', '2', '.', '.', '9', '.'],
    ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
    ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
    ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
    ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
    ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
    ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
    ['.', '2', '.', '.', '3', '.', '.', '.', '.']
  ]
];

checkSudoku(inputs[1]);

describe('Test suite for the checkSudoku function', () => {
  it('should check the sudoku', () => assert.deepStrictEqual(checkSudoku(inputs[0]), true));
  it('should check the sudoku', () => assert.deepStrictEqual(checkSudoku(inputs[1]), false));
});
