import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';
import { AuthService } from './auth.service';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    PhElementsModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
