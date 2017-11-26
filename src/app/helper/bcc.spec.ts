import {Bcc} from './bcc';
import {Hex} from './hex';
import {ObjectHelper} from './object-helper';

describe('Bcc', () => {
  let bcc: Bcc;
  let hex: Hex;

  beforeEach(() => {
    hex = new Hex();
    bcc = new Bcc(hex);
  });

  describe('calculate', () => {
    it('should return null if the input array is null', () => {
      spyOn(ObjectHelper, 'checkArray').and.returnValue(false);

      expect(bcc.calculate(null)).toBeNull();
    });

    it('should return null if input array is of zero length', () => {
      spyOn(ObjectHelper, 'checkArray').and.returnValue(false);

      expect(bcc.calculate([])).toBeNull();
    });

    it('should return null if input array is undefined', () => {
      spyOn(ObjectHelper, 'checkArray').and.returnValue(false);

      expect(bcc.calculate(undefined)).toBeNull();
    });

    it('should return correctly calculated bcc', () => {
      spyOn(ObjectHelper, 'checkArray').and.returnValue(true);
      spyOn(hex, 'validate').and.returnValue(true);

      expect(bcc.calculate(['01', '02', '03', '04'])).toBe(4);
    });
  });
});
