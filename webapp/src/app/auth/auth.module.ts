import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { PhElementsModule } from '../ph-elements/ph-elements.module';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';



@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    PhElementsModule
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class AuthModule { }
