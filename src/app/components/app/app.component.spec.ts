import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TutorialComponent } from '../tutorial/tutorial.component';
import { AppComponent } from './app.component';
import { Ascii, Hex, Bcc } from 'node-bcc';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, TutorialComponent],
      imports: [BrowserModule, FormsModule],
    });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  describe('general', () => {
    it('should create component', () => {
      expect(component).toBeTruthy();
    });

    it('should set inputMode to "ascii" by default', () => {
      expect(component.inputMode).toBe('ascii');
    });
  });

  describe('calculate', () => {
    describe('ascii', () => {
      it('should set error when Ascii.validate returns false', () => {
        const spy = spyOn(Ascii, 'validate').and.returnValue(false);

        component.asciiString = 'someAscii';
        component.inputMode = 'ascii';

        component.calculate();

        expect(spy).toHaveBeenCalledWith('someAscii');
        expect(component.error).not.toBeNull();
      });

      it('should set correct result', () => {
        const validateSpy = spyOn(Ascii, 'validate').withArgs('abc').and.returnValue(true);
        const asciiToByteArraySpy = spyOn(Ascii, 'asciiToByteArray').withArgs('abc').and.returnValue([97, 98, 99]);
        const calulateSpy = spyOn(Bcc, 'calculate').withArgs([97, 98, 99]).and.returnValue(96);
        const toHexStringSpy = spyOn(Hex, 'toHexString').withArgs([96], true).and.returnValue('60');

        component.asciiString = 'abc';
        component.inputMode = 'ascii';

        component.calculate();

        expect(validateSpy).toHaveBeenCalled();
        expect(asciiToByteArraySpy).toHaveBeenCalled();
        expect(calulateSpy).toHaveBeenCalled();
        expect(toHexStringSpy).toHaveBeenCalled();

        expect(component.bccVal).toBe('60');
        expect(component.bccBinary).toBe((96).toString(2));
      });
    });

    describe('hex', () => {
      it('should set error when Hex.validate returns false', () => {
        const spy = spyOn(Hex, 'validate').and.returnValue(false);

        component.hexString = 'someHex';
        component.inputMode = 'hex';

        component.calculate();

        expect(spy).toHaveBeenCalledWith('someHex');
        expect(component.error).not.toBeNull();
      });

      it('should remove spaces from hex string when calling Hex.validate', () => {
        const spy = spyOn(Hex, 'validate').and.returnValue(false);

        component.hexString = 'AA BB CC';
        component.inputMode = 'hex';

        component.calculate();

        expect(spy).toHaveBeenCalledWith('AABBCC');
        expect(component.error).not.toBeNull();
      });

      it('should set correct result', () => {
        const validateSpy = spyOn(Hex, 'validate').withArgs('606162').and.returnValue(true);
        const splitSpy = spyOn(Hex, 'split').withArgs('606162').and.returnValue(['60', '61', '62']);
        const calulateSpy = spyOn(Bcc, 'calculate')
          .withArgs(['60', '61', '62'] as any)
          .and.returnValue(96);
        const toHexStringSpy = spyOn(Hex, 'toHexString').withArgs([96], true).and.returnValue('60');

        component.hexString = '60 61 62';
        component.inputMode = 'hex';

        component.calculate();

        expect(validateSpy).toHaveBeenCalled();
        expect(splitSpy).toHaveBeenCalled();
        expect(calulateSpy).toHaveBeenCalled();
        expect(toHexStringSpy).toHaveBeenCalled();

        expect(component.bccVal).toBe('60');
        expect(component.bccBinary).toBe((96).toString(2));

        expect(component.bccVal).toBe('60');
        expect(component.bccBinary).toBe((96).toString(2));
      });
    });

    it('should not call anything when mode is unknown', () => {
      const asciiValidateSpy = spyOn(Ascii, 'validate').withArgs('abc').and.returnValue(true);
      const hexValidateSpy = spyOn(Hex, 'validate').withArgs('606162').and.returnValue(true);
      const asciiToByteArraySpy = spyOn(Ascii, 'asciiToByteArray').withArgs('abc').and.returnValue([97, 98, 99]);
      const splitSpy = spyOn(Hex, 'split').withArgs('606162').and.returnValue(['60', '61', '62']);
      const calulateSpy = spyOn(Bcc, 'calculate')
        .withArgs(['60', '61', '62'] as any)
        .and.returnValue(96);
      const toHexStringSpy = spyOn(Hex, 'toHexString').withArgs([96], true).and.returnValue('60');

      component.inputMode = 'asd';

      component.calculate();

      expect(asciiValidateSpy).not.toHaveBeenCalled();
      expect(hexValidateSpy).not.toHaveBeenCalled();
      expect(asciiToByteArraySpy).not.toHaveBeenCalled();
      expect(splitSpy).not.toHaveBeenCalled();
      expect(calulateSpy).not.toHaveBeenCalled();
      expect(toHexStringSpy).not.toHaveBeenCalled();
    });
  });
});
