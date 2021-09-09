import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const obj = {};
  let test;
  let arr = domains.sort((a, b) => a.length - b.length);
  arr = arr.map((value) => value.split('.'));
  for (let i = 0; i < arr.length; i++) {
    test = '';
    for (let j = arr[i].length - 1; j > -1; j--) {
      test += `.${arr[i][j]}`;
      if (obj[test]) {
        obj[test]++;
      } else {
        obj[test] = 1;
      }
    }
  }
  return obj;
}
