import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhElementsModule } from './ph-elements/ph-elements.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PhElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
