import {ObjectHelper} from './object-helper';

/**
 * This class provides methods for handling hex strings.
 *
 * @export
 * @class Hex
 */
export class Hex {
  /**
   * Splits the given hexadecimal string.
   *
   *  The input string should not contain spaces and the individual bytes should not be prepended by '0x'.
   *
   * ## Example
   * **Input:**
   * ``` js
   * 'AABBCCDDEEFF'
   * ```
   *
   * **Output:**
   * ``` js
   * ['AA', 'BB', 'CC', 'DD', 'EE', 'FF']
   * ```
   *
   * @param {string} hex
   * @returns {string[]}
   * @memberof Hex
   */
  split(hex: string): string[] {
    const chunks: string[] = [];

    if (!ObjectHelper.checkString(hex)) {
      return null;
    }

    for (let i = 0; i < hex.length; i += 2) {
      chunks.push(hex.substring(i, i + 2));
    }

    return chunks;
  }

  /**
   * Validates the given hexadecimal string.
   *
   * @param {string} hex The hexadecimal string to validate.
   * @returns {boolean} Whether the given string is a valid hexadecimal string.
   * @memberof Hex
   */
  validate(hex: string): boolean {
    const regExp = /^[-+]?[0-9A-Fa-f]+\.?[0-9A-Fa-f]*?$/;

    if (!ObjectHelper.checkString(hex)) {
      return null;
    }

    return regExp.test(hex);
  }

  /**
   * Converts the given array of numbers to a hexadecimal string.
   *
   * @param {number[]} array The array to convert.
   * @param {boolean} [uppercase] Whether the string should be uppercase.
   * @returns {string} The given array of numbers as a hexadecimal string.
   * @memberof Hex
   */
  toHexString(array: number[], uppercase?: boolean): string {
    let result = '';

    if (!ObjectHelper.checkArray(array)) {
      return null;
    }

    array.forEach((num) => {
      if (num < 16) {
        result += `0${num.toString(16)}`;
        return;
      }

      result += num.toString(16);
    });

    if (uppercase) {
      return result.toUpperCase();
    }

    return result.toLowerCase();
  }
}
