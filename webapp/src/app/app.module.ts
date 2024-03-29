import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhElementsModule } from './ph-elements/ph-elements.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { DroneControlComponent } from './drone-control/drone-control.component';
import { DroneControlModule } from './drone-control/drone-control.module';

declare global {
  interface Window {
    __env: {
      lsxServerHostname: string,
      lsxServerPort: string
    }
  }
}


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
    DroneControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
