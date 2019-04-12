import {Component} from '@angular/core';
import {Ascii, Bcc, Hex} from 'node-bcc';

/**
 * The main component of the app.
 *
 * @export
 * @class AppComponent
 */
@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  /**
   * The input mode selected by the user. Can be either `ascii` or `hex`.
   *
   * @type {string}
   * @memberof AppComponent
   */
  inputMode: string;

  /**
   * The HEX string input.
   *
   * @type {string}
   * @memberof AppComponent
   */
  hexString: string;

  /**
   * The ASCII string input.
   *
   * @type {string}
   * @memberof AppComponent
   */
  asciiString: string;

  /**
   * The calculated BCC value for the HEX input.
   *
   * @type {string}
   * @memberof AppComponent
   */
  bccVal: string;

  /**
   * The binary representation of the BCC result.
   *
   * @type {string}
   * @memberof AppComponent
   */
  bccBinary: string;

  /**
   * The error string displayed in the HTML template.,
   *
   * @type {string}
   * @memberof AppComponent
   */
  error: string;

  /**
   * Creates an instance of AppComponent.
   * @memberof AppComponent
   */
  constructor() {
    this.inputMode = 'ascii';
  }

  /**
   * Calculates the Block Check Character of the hex value in the input.
   *
   * @memberof AppComponent
   */
  calculate() {
    if (this.inputMode === 'ascii') {
      if (Ascii.validate(this.asciiString)) {
        const bytes = Ascii.asciiToByteArray(this.asciiString);
        const bccResult = Bcc.calculate(bytes);
        this.bccVal = Hex.toHexString([bccResult], true);
        this.bccBinary = bccResult.toString(2);
        this.error = null;
      } else {
        this.error = 'You did not enter a valid ASCII string.';
      }
    } else if (this.inputMode === 'hex') {
      if (Hex.validate(this.hexString.replace(/ /g, ''))) {
        const splitHexString = Hex.split(this.hexString.replace(/ /g, ''));
        const bccResult = Bcc.calculate(splitHexString);
        this.bccVal = Hex.toHexString([bccResult], true);
        this.bccBinary = bccResult.toString(2);
        this.error = null;
      } else {
        this.error = 'You did not enter a valid hex string.';
      }
    }
  }
}
