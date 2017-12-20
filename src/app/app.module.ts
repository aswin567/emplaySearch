import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { GitSearchComponent } from './git-search/git-search.component';

import { MatFormFieldModule, MatInputModule, MatSnackBarModule, MatProgressBarModule, MatCardModule } from '@angular/material';
const MD_MODULES = [MatFormFieldModule, MatInputModule, MatSnackBarModule, MatProgressBarModule, MatCardModule];
@NgModule({
  declarations: [
    AppComponent,
    GitSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MD_MODULES
  ],
  providers: [ AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
