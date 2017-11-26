/**
 * This class provides methods for validating objects.
 *
 * @export
 * @class ObjectHelper
 */
export class ObjectHelper {
  /**
   * Validates the given array.
   *
   * @static
   * @param {any[]} array The array to validate.
   * @returns {boolean} False if the array is null, undefined or of zero length.
   * @memberof ObjectHelper
   */
  static checkArray(array: any[]): boolean {
    if (array === null) {
      return false;
    }

    if (array === undefined) {
      return false;
    }

    if (array.length === 0) {
      return false;
    }

    return true;
  }

  /**
   * Validates the given string.
   *
   * @static
   * @param {string} string The string to validate.
   * @returns {boolean} False if the string is null, undefined or empty.
   * @memberof ObjectHelper
   */
  static checkString(string: string): boolean {
    if (string === null) {
      return false;
    }

    if (string === undefined) {
      return false;
    }

    if (string === '') {
      return false;
    }

    return true;
  }
}
