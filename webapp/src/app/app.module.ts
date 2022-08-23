import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PhElementsModule } from './ph-elements/ph-elements.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { SpeakerAnnouncementsComponent } from './speaker-announcements/speaker-announcements.component';
import { SpeakerAnnouncementsModule } from './speaker-announcements/speaker-announcements.module';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
