import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
  const index = [];
  for (let i = 0; i < matrix[0].length; i++) {
    index.push(i);
  }
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < index.length; j++) {
      if (matrix[i][index[j]] === 0) {
        index.splice(j, 1);
        j--;
      } else {
        sum += matrix[i][index[j]];
      }
    }
  }
  return sum;
}
