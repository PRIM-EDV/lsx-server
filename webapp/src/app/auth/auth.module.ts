import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    PhElementsModule
  ]
})
export class AuthModule { }
