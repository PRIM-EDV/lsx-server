import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhElementsModule } from './ph-elements/ph-elements.module';
import { PowerControlModule } from './power-control/power-control.module';
import { PowerPlantComponent } from './power-plant/power-plant.component';
import { PowerPlantModule } from './power-plant/power-plant.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    DashboardModule,
    HttpClientModule,
    PhElementsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
