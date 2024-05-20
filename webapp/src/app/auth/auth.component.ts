import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../backend/backend.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  public username: string = '';
  public password: string = '';

  constructor(private readonly authService: AuthService, private readonly backend: BackendService, private readonly router: Router) { }

  ngOnInit(): void {
  }

  public async login() {
    try {
      const jwt = await this.authService.requestJwt(this.username, this.password);
      await this.backend.connect(jwt);
      this.router.navigateByUrl('/dashboard');
    }
    catch(e){

    }
  }

}
