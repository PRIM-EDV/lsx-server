import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerControlComponent } from './power-control.component';


@NgModule({
  declarations: [PowerControlComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PowerControlComponent
  ]
})
export class PowerControlModule { }
