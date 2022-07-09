import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerPlantComponent } from './power-plant.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';


@NgModule({
  declarations: [PowerPlantComponent],
  imports: [
    CommonModule,
    PhElementsModule
  ],
  exports: [
    PowerPlantComponent
  ]
})
export class PowerPlantModule { }
