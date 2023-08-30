import { NgModule } from '@angular/core';
import { PhWindowComponent } from './ph-window/ph-window.component';
import { PhButtonSelectComponent } from './ph-button-select/ph-button-select.component';
import { PhSidebarComponent } from './ph-sidebar/ph-sidebar.component';
import { PhTopbarComponent } from './ph-topbar/ph-topbar.component';
import { PhFormComponent } from './ph-form/ph-form.component';
import { PhInputComponent } from './ph-input/ph-input.component';
import { PhButtonComponent } from './ph-button/ph-button.component';
import { PhCommandListComponent } from './ph-command-list/ph-command-list.component';
import { PhButtonListComponent } from './ph-button-list/ph-button-list.component';
import { PhTableComponent } from './ph-table/ph-table.component';
import { PhSidebarItemComponent } from './ph-sidebar-item/ph-sidebar-item.component';
import { PhTopbarItemComponent } from './ph-topbar-item/ph-topbar-item.component';
import { PhTopbarHeaderComponent } from './ph-topbar-header/ph-topbar-header.component';

@NgModule({
  declarations: [
    PhWindowComponent,
    PhButtonSelectComponent,
    PhSidebarComponent,
    PhTopbarComponent,
    PhFormComponent,
    PhInputComponent,
    PhButtonComponent,
    PhCommandListComponent,
    PhButtonListComponent,
    PhTableComponent,
    PhSidebarItemComponent,
    PhTopbarItemComponent,
    PhTopbarHeaderComponent
  ],
  imports: [],
  exports: [
    PhWindowComponent,
    PhSidebarComponent,
    PhTopbarComponent,
    PhFormComponent,
    PhButtonListComponent,
    PhButtonSelectComponent,
    PhButtonComponent,
    PhInputComponent,
    PhCommandListComponent,
    PhTableComponent,
    PhSidebarItemComponent,
    PhTopbarComponent,
    PhTopbarHeaderComponent,
    PhTopbarItemComponent
  ],
  providers: [],
  bootstrap: []
})
export class PhElementsModule { }
