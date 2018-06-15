import {Component} from '@angular/core';
import {Bcc, Hex, ObjectHelper} from '../../helper';

/**
 * The main component of the app.
 *
 * @export
 * @class AppComponent
 */
@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  /**
   * THe {@link Bcc} helper class instance.
   *
   * @type {Bcc}
   * @memberof AppComponent
   */
  bcc: Bcc;

  /**
   * The {@link Hex} helper class instance.
   *
   * @type {Hex}
   * @memberof AppComponent
   */
  hex: Hex;

  /**
   * The HEX string input.
   *
   * @type {string}
   * @memberof AppComponent
   */
  hexString: string;

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
    this.hex = new Hex();
    this.bcc = new Bcc(this.hex);
  }

  /**
   * Calculates the Block Check Character of the hex value in the input.
   *
   * @memberof AppComponent
   */
  calculate() {
    if (ObjectHelper.checkString(this.hexString)) {
      if (this.hex.validate(this.hexString.replace(/ /g, ''))) {
        const splitHexString = this.hex.split(this.hexString.replace(/ /g, ''));
        const bccResult = this.bcc.calculate(splitHexString);
        this.bccVal = this.hex.toHexString([bccResult], true);
        this.bccBinary = bccResult.toString(2);
        this.error = null;
      } else {
        this.error = 'This is not a valid hex string.';
      }
    } else {
      this.error = 'You did not enter anything.';
    }
  }
}
