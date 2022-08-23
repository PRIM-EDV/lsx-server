import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerAnnouncementsComponent } from './speaker-announcements.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';



@NgModule({
  declarations: [SpeakerAnnouncementsComponent],
  imports: [
    CommonModule,
    PhElementsModule
  ],
  exports: [
    SpeakerAnnouncementsComponent
  ]
})
export class SpeakerAnnouncementsModule { }
