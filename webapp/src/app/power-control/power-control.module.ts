import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PowerControlComponent } from './power-control.component';
import { PowerGridService } from './power-grid.service';


@NgModule({
  declarations: [PowerControlComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    PowerControlComponent
  ],
  providers: [
    PowerGridService
  ]
})
export class PowerControlModule { }
