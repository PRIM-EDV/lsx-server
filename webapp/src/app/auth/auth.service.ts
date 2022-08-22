import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private readonly http: HttpClient) {

  }

  public requestJwt(username: string, password: string)
  {
    const options = {headers: {'Content-Type': 'application/json'}};
    const data = {username: username, password: password};
    const route = `${window.location.protocol}//${window.location.hostname}:3000/api/auth/login`;

    console.log(data);

    this.http.post(route, data).subscribe((res) => {
      console.log(res);
    });
  }

  public isAuthenticated(): boolean {
    // const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return true;
  }
}
