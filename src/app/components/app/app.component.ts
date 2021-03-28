import { Component } from '@angular/core';
import { Ascii, Bcc, Hex } from 'node-bcc';

@Component({ selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css'] })
export class AppComponent {
  inputMode: string;
  hexString: string;
  asciiString: string;
  bccVal: string;
  bccBinary: string;
  error: string;

  constructor() {
    this.inputMode = 'ascii';
  }

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
