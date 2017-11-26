/**
 * This model represents the result of a Block Check Character calculation.
 *
 * @export
 * @class BccResult
 */
export class BccResult {
  /**
   * The actual Block Check Character.
   *
   * @type {number}
   * @memberof BccResult
   */
  bcc: number;

  /**
   * A list of incorrect bytes in the message.
   *
   * @type {string[]}
   * @memberof BccResult
   */
  incorrectBytes: string[];
}
