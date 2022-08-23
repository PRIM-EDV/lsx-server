import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';
import { PowerControlModule } from '../power-control/power-control.module';
import { PowerPlantModule } from '../power-plant/power-plant.module';
import { BaseLockdownModule } from '../base-lockdown/base-lockdown.module';
import { SpeakerAnnouncementsModule } from '../speaker-announcements/speaker-announcements.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BaseLockdownModule,
    PhElementsModule,
    PowerControlModule,
    PowerPlantModule,
    SpeakerAnnouncementsModule
  ]
})
export class DashboardModule { }
