import {ObjectHelper} from './object-helper';

describe('ObjectHelper', () => {
  describe('checkArray', () => {
    it('should return false if input is of zero length', () => {
      expect(ObjectHelper.checkArray([])).toBeFalsy();
    });

    it('should return false if input is null', () => {
      expect(ObjectHelper.checkArray(null)).toBeFalsy();
    });

    it('should return false if input is undefined', () => {
      expect(ObjectHelper.checkArray(undefined)).toBeFalsy();
    });

    it('should return true if array is valid and not of zero length', () => {
      expect(ObjectHelper.checkArray([1])).toBeTruthy();
    });
  });

  describe('checkString', () => {
    it('should return false if input is null', () => {
      expect(ObjectHelper.checkString(null)).toBeFalsy();
    });

    it('should return false if input is undefined', () => {
      expect(ObjectHelper.checkString(undefined)).toBeFalsy();
    });

    it('should return false if input is empty', () => {
      expect(ObjectHelper.checkString('')).toBeFalsy();
    });

    it('should return trueif string is not empty', () => {
      expect(ObjectHelper.checkString('ABC')).toBeTruthy();
    });
  });
});
