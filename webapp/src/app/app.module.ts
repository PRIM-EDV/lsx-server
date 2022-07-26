import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhElementsModule } from './ph-elements/ph-elements.module';
import { PowerControlModule } from './power-control/power-control.module';
import { PowerPlantComponent } from './power-plant/power-plant.component';
import { PowerPlantModule } from './power-plant/power-plant.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhElementsModule,
    PowerControlModule,
    PowerPlantModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
