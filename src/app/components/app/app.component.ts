import {Component} from '@angular/core';
import {Bcc, Hex, ObjectHelper} from '../../helper';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
  bcc: Bcc;
  hex: Hex;
  hexString: string;
  bccVal: string;
  bccBinary: string;
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
