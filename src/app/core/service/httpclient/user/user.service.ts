import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { User } from '../../../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://localhost:8082/api/user';

  username = 'Admin';
  password = 'Admin1234';

  constructor(private http: HttpClient) {}

  public getUser() {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get<User[]>(this.url, { headers, observe: 'response' });
  }

  public getUserById(id: number) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get<User>(`${this.url}/${id}`, {
      headers,
      observe: 'response',
    });
  }

  public deleteUser(id: number) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.delete<User>(`${this.url}/${id}`, {
      headers,
      observe: 'response',
    });
  }

  public createUser(user: User) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.post<User>(this.url, user, {
      headers,
      observe: 'response',
    });
  }

  public updateUser(user: User) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.put<User>(this.url, user, {
      headers,
      observe: 'response',
    });
  }
}
