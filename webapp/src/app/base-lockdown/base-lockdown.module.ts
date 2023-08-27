import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseLockdownComponent } from './base-lockdown.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';
import { BaseLockdownService } from './base-lockdown.service';

@NgModule({
  declarations: [
    BaseLockdownComponent
  ],
  imports: [
    CommonModule,
    PhElementsModule
  ],
  exports: [
    BaseLockdownComponent
  ],
  providers: [
    BaseLockdownService
  ]
})
export class BaseLockdownModule { }
