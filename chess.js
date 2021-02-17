/**
 * Check if two chessboard cells are the same color.
 *
 * @param {String} cell1
 * @param {String} cell2
 * @return {Boolean}
 */
const chessBoardCellColor = (cell1, cell2) => {
  const isPair = x => {
    if (['a', 'c', 'e', 'g', '1', '3', '5', '7'].includes(x.toLowerCase())) return false;
    else return true;
  };
  const cell1Column = isPair(cell1[0]);
  const cell1Row = isPair(cell1[1]);

  const cell2Column = isPair(cell2[0]);
  const cell2Row = isPair(cell2[1]);

  if (cell1Row) {
    if (cell2Row) return cell1Column === cell2Column;
    return cell1Column !== cell2Column;
  } else {
    if (cell2Row) return cell1Column !== cell2Column;
    return cell1Column === cell2Column;
  }
};

console.log(chessBoardCellColor('A1', 'A2'));
