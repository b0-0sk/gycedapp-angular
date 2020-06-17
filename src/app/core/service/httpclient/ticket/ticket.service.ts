import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Ticket } from '../../../models/Ticket';

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  private url = 'https://localhost:8082/api/ticket';

  username = 'Admin';
  password = 'Admin1234';

  constructor(private http: HttpClient) {}

  public getTicket() {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get<Ticket[]>(this.url, {
      headers,
      observe: 'response' });
  }

  public getTicketById(id: number) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.get<Ticket>(`${this.url}/${id}`, {
      headers,
      observe: 'response',
    });
  }

  public deleteTicket(id: number) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.delete<Ticket>(`${this.url}/${id}`, {
      headers,
      observe: 'response',
    });
  }

  public createTicket(ticket: Ticket) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.post<Ticket>(this.url, ticket, {
      headers,
      observe: 'response',
    });
  }

  public editTicket(ticket: Ticket) {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(this.username + ':' + this.password),
    });
    return this.http.put<Ticket>(this.url, ticket, {
      headers,
      observe: 'response',
    });
  }
}
