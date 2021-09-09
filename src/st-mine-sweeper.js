import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
  let count = 0;
  const vertical = matrix.length;
  const gorizontal = matrix[0].length;
  const arr = [];
  let array = [];
  for (let i = 0; i < vertical; i++) {
    array = [];
    for (let j = 0; j < gorizontal; j++) {
      if (j - 1 >= 0 && matrix[i][j - 1]) count++;
      if (j + 1 <= gorizontal && matrix[i][j + 1]) count++;
      if (i - 1 >= 0 && matrix[i - 1][j]) count++;
      if (i + 1 < vertical && matrix[i + 1][j]) count++;
      if (i - 1 >= 0 && j - 1 >= 0 && matrix[i - 1][j - 1]) count++;
      if (i - 1 >= 0 && j + 1 <= gorizontal && matrix[i - 1][j + 1]) count++;
      if (i + 1 < vertical && j - 1 >= 0 && matrix[i + 1][j - 1]) count++;
      if (i + 1 < vertical && j + 1 <= gorizontal && matrix[i + 1][j + 1]) count++;
      array.push(count);
      count = 0;
    }
    arr.push(array);
  }
  return arr;
}