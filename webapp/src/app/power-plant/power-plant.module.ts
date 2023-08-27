import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerPlantComponent } from './power-plant.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';
import { PowerPlantService } from './power-plant.service';

@NgModule({
  declarations: [PowerPlantComponent],
  imports: [
    CommonModule,
    PhElementsModule
  ],
  exports: [
    PowerPlantComponent
  ],
  providers: [
    PowerPlantService
  ]
})
export class PowerPlantModule { }
