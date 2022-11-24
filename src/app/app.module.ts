import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ejercicio5Component } from './ejercicio5/ejercicio5.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ejercicio5Component],
  bootstrap: [AppComponent],
})
export class AppModule {}
