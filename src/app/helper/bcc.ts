import {BccResult} from '../models/bcc-result';

import {Hex} from './hex';
import {ObjectHelper} from './object-helper';

/**
 * This class provides methods for the Block Check Character.
 *
 * @export
 * @class Bcc
 */
export class Bcc {
  hex: Hex;

  /**
   * Creates an instance of Bcc.
   * @param {Hex} hex The instance of the Hex helper class.
   * @memberof Bcc
   */
  constructor(hex: Hex) {
    this.hex = hex;
  }

  /**
   * Calculates the Block Check Character of the given message.
   *
   * @param {string[]} messageBytes The message to calculate the Block Check Character of.
   * @returns {number} The Block Check Character of the given message.
   * @memberof Bcc
   */
  calculate(messageBytes: string[]): number {
    let bcc = 0x00;

    if (!ObjectHelper.checkArray(messageBytes)) {
      return null;
    }

    messageBytes.forEach(element => {
      bcc ^= parseInt(element, 16);
    });

    return bcc;
  }
}
