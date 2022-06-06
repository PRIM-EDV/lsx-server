import { NgModule } from '@angular/core';
import { PhWindowComponent } from './ph-window/ph-window.component';
import { PhButtonListComponent } from './ph-button-list/ph-button-list.component';

@NgModule({
  declarations: [
    PhWindowComponent,
    PhButtonListComponent
  ],
  imports: [],
  exports: [
    PhWindowComponent
  ],
  providers: [],
  bootstrap: []
})
export class PhElementsModule { }
