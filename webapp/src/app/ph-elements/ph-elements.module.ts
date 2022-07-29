import { NgModule } from '@angular/core';
import { PhWindowComponent } from './ph-window/ph-window.component';
import { PhButtonSelectComponent } from './ph-button-select/ph-button-select.component';
import { PhSidebarComponent } from './ph-sidebar/ph-sidebar.component';
import { PhTopbarComponent } from './ph-topbar/ph-topbar.component';
import { PhFormComponent } from './ph-form/ph-form.component';
import { PhInputComponent } from './ph-input/ph-input.component';
import { PhButtonComponent } from './ph-button/ph-button.component';
import { PhCommandListComponent } from './ph-command-list/ph-command-list.component';

@NgModule({
  declarations: [
    PhWindowComponent,
    PhButtonSelectComponent,
    PhSidebarComponent,
    PhTopbarComponent,
    PhFormComponent,
    PhInputComponent,
    PhButtonComponent,
    PhCommandListComponent
  ],
  imports: [],
  exports: [
    PhWindowComponent,
    PhSidebarComponent,
    PhTopbarComponent,
    PhFormComponent,
    PhButtonSelectComponent,
    PhButtonComponent,
    PhInputComponent,
    PhCommandListComponent
  ],
  providers: [],
  bootstrap: []
})
export class PhElementsModule { }
