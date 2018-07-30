import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './components/app/app.component';
import { TutorialComponent } from './components/tutorial/tutorial.component';

@NgModule({declarations: [AppComponent, TutorialComponent], imports: [BrowserModule, FormsModule], providers: [], bootstrap: [AppComponent]})
export class AppModule {}
