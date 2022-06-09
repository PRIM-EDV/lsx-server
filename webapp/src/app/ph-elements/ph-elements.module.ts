import { NgModule } from '@angular/core';
import { PhWindowComponent } from './ph-window/ph-window.component';
import { PhButtonListComponent } from './ph-button-list/ph-button-list.component';
import { PhSidebarComponent } from './ph-sidebar/ph-sidebar.component';
import { PhTopbarComponent } from './ph-topbar/ph-topbar.component';
import { PhFormComponent } from './ph-form/ph-form.component';
import { PhInputComponent } from './ph-input/ph-input.component';
import { PhButtonComponent } from './ph-button/ph-button.component';

@NgModule({
  declarations: [
    PhWindowComponent,
    PhButtonListComponent,
    PhSidebarComponent,
    PhTopbarComponent,
    PhFormComponent,
    PhInputComponent,
    PhButtonComponent
  ],
  imports: [],
  exports: [
    PhWindowComponent,
    PhSidebarComponent,
    PhTopbarComponent,
    PhFormComponent,
    PhButtonListComponent,
    PhButtonComponent
  ],
  providers: [],
  bootstrap: []
})
export class PhElementsModule { }
