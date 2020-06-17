import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // private url = 'https://gycedapp-cli.herokuapp.com/auth/login';
  private url = 'http://localhost:8082/auth/login';

  constructor(
    public http: HttpClient,
    private router: Router
  ) {}

  public auth(username: string, password: string) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });

    return this.http // headers
      .get<any>(this.url, {headers, observe: 'response' })
      .pipe(
        map((userData) => {
          sessionStorage.setItem('username', userData.body.username);
          sessionStorage.setItem('roles', userData.body.roles);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    const user = sessionStorage.getItem('username');
    console.log(!(user === null));
    return (!user === null);
  }

  logOut(){
    sessionStorage.removeItem('username');
  }
}
