import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhElementsModule } from '../ph-elements/ph-elements.module';
import { DroneControlComponent } from './drone-control.component';



@NgModule({
  declarations: [DroneControlComponent],
  imports: [
    CommonModule,
    PhElementsModule
  ],
  exports: [
    DroneControlComponent
  ]
})
export class DroneControlModule { }
