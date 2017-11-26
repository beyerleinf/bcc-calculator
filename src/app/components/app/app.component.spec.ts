import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {Bcc, Hex, ObjectHelper} from '../../helper';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AppComponent], imports: [BrowserModule, FormsModule]});

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  describe('general', () => {
    it('should create component', () => {
      expect(component).toBeTruthy();
    });
  });

  describe('calculate', () => {
    it('should set error if ObjectHelper.checkString returns false', () => {
      spyOn(ObjectHelper, 'checkString').and.returnValue(false);

      component.calculate();

      expect(component.error).not.toBeNull();
    });

    it('should set error if hex.validate returns false', () => {
      spyOn(ObjectHelper, 'checkString').and.returnValue(true);
      spyOn(Hex.prototype, 'validate').and.returnValue(false);

      component.hexString = '01020304';
      component.calculate();

      expect(component.error).not.toBeNull();
    });

    it('should call hex.validate with string without spaces', () => {
      spyOn(ObjectHelper, 'checkString').and.returnValue(true);
      spyOn(Hex.prototype, 'validate').and.returnValue(false);

      component.hexString = '01 02 03 04';
      component.calculate();

      expect(Hex.prototype.validate).toHaveBeenCalled();
      expect(Hex.prototype.validate).toHaveBeenCalledWith('01020304');
    });

    it('should call hex.split with string without spaces', () => {
      spyOn(ObjectHelper, 'checkString').and.returnValue(true);
      spyOn(Hex.prototype, 'validate').and.returnValue(true);
      spyOn(Hex.prototype, 'split').and.returnValue(['01', '02', '03', '04']);

      component.hexString = '01 02 03 04';
      component.calculate();

      expect(Hex.prototype.split).toHaveBeenCalled();
      expect(Hex.prototype.split).toHaveBeenCalledWith('01020304');
    });

    it('should call bcc.calculate with array of hex bytes', () => {
      spyOn(ObjectHelper, 'checkString').and.returnValue(true);
      spyOn(Hex.prototype, 'validate').and.returnValue(true);
      spyOn(Hex.prototype, 'split').and.returnValue(['01', '02', '03', '04']);
      spyOn(Bcc.prototype, 'calculate').and.returnValue(4);

      component.hexString = '01 02 03 04';
      component.calculate();

      expect(Bcc.prototype.calculate).toHaveBeenCalled();
      expect(Bcc.prototype.calculate).toHaveBeenCalledWith(['01', '02', '03', '04']);
    });

    it('should set error to null if all succeeded', () => {
      spyOn(ObjectHelper, 'checkString').and.returnValue(true);
      spyOn(Hex.prototype, 'validate').and.returnValue(true);
      spyOn(Hex.prototype, 'split').and.returnValue(['01', '02', '03', '04']);
      spyOn(Bcc.prototype, 'calculate').and.returnValue(4);

      component.hexString = '01 02 03 04';
      component.calculate();

      expect(component.error).toBeNull();
    });
  });
});
