import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GitSearchComponent } from './git-search/git-search.component';

import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule} from '@angular/material';
const MD_MODULES = [MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatInputModule ];
@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MD_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
