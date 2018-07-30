import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {Ascii, Bcc, Hex} from 'node-bcc';

import {TutorialComponent} from '../tutorial/tutorial.component';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [AppComponent, TutorialComponent], imports: [BrowserModule, FormsModule]});

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
});
