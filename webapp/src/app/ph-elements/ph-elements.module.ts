import { NgModule } from '@angular/core';
import { PhWindowComponent } from './ph-window/ph-window.component';
import { PhButtonListComponent } from './ph-button-list/ph-button-list.component';
import { PhSidebarComponent } from './ph-sidebar/ph-sidebar.component';
import { PhTopbarComponent } from './ph-topbar/ph-topbar.component';

@NgModule({
  declarations: [
    PhWindowComponent,
    PhButtonListComponent,
    PhSidebarComponent,
    PhTopbarComponent
  ],
  imports: [],
  exports: [
    PhWindowComponent,
    PhSidebarComponent,
    PhTopbarComponent
  ],
  providers: [],
  bootstrap: []
})
export class PhElementsModule { }
