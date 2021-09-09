import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let test = 1;
  let string = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      test++;
    } else if (test > 1) {
      string += `${test}${str[i]}`;
      test = 1;
    } else {
      string += `${str[i]}`;
      test = 1;
    }
  }
  return string;
}
