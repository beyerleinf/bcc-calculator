import {Hex} from './hex';

describe('Hex', () => {
  let hex: Hex;

  beforeEach(() => {
    hex = new Hex();
  });

  describe('split', () => {
    it('should return null if input string is null', () => {
      expect(hex.split(null)).toBeNull();
    });

    it('should return null if input string is undefined', () => {
      expect(hex.split(undefined)).toBeNull();
    });

    it('should return null if input string is empty', () => {
      expect(hex.split('')).toBeNull();
    });

    it('should return correctly split array', () => {
      expect(hex.split('AABBCCDDEEFF')).toEqual(['AA', 'BB', 'CC', 'DD', 'EE', 'FF']);
    });
  });

  describe('validate', () => {
    it('should return false if input string is null', () => {
      expect(hex.validate(null)).toBeFalsy();
    });

    it('should return false if input string is undefined', () => {
      expect(hex.validate(undefined)).toBeFalsy();
    });

    it('should return false if input string is empty', () => {
      expect(hex.validate('')).toBeFalsy();
    });

    it('should return false if input string is invalid hex string', () => {
      expect(hex.validate('00112233445566778899AABBCCDDEEFFXX')).toBeFalsy();
    });

    it('should return true if input string is valid hex string', () => {
      expect(hex.validate('00112233445566778899AABBCCDDEEFF')).toBeTruthy();
    });
  });

  describe('toHexString', () => {
    it('should return null if input is of zero length', () => {
      expect(hex.toHexString([])).toBeNull();
    });

    it('should return null if input array is null', () => {
      expect(hex.toHexString(null)).toBeNull();
    });

    it('should return null if input is undefined', () => {
      expect(hex.toHexString(undefined)).toBeNull();
    });

    it('should return string prepended with 0 if input value is 15 or lower', () => {
      for (let i = 0; i < 16; i++) {
        expect(hex.toHexString([i])).toEqual(`0${i.toString(16)}`);
      }
    });

    it('should return return valid hex string', () => {
      expect(hex.toHexString([1, 15, 58, 96, 34])).toEqual('010f3a6022');
    });

    it('should return the string in upopercase of the uppercase flag was set', () => {
      expect(hex.toHexString([1, 15, 58, 96, 34], true)).toEqual('010F3A6022');
    });
  });
});
