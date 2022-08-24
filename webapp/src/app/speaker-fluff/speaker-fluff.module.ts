import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakerFluffComponent } from './speaker-fluff.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';
import { SpeakerFluffService } from './speaker-fluff.service';

@NgModule({
  declarations: [
    SpeakerFluffComponent
  ],
  imports: [
    CommonModule,
    PhElementsModule
  ],
  exports: [
    SpeakerFluffComponent
  ],
  providers: [
    SpeakerFluffService
  ]
})
export class SpeakerFluffModule { }
