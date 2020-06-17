import { Component, OnInit } from '@angular/core';

import { TicketService } from 'src/app/core/service/httpclient/ticket/ticket.service';
import { HttpResponse } from '@angular/common/http';
import { Ticket } from 'src/app/core/models/Ticket';

@Component({
  selector: 'app-products-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss']
})
export class TicketListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  constructor(
    private productsService: TicketService
  ) { }

  ngOnInit() {
    this.fetchTicket();
  }

  fetchTicket() {
    this.productsService.getTicket()
    .subscribe();
  }

  deleteTicket(id: number) {
    this.productsService.deleteTicket(id)
    .subscribe(rta => {
      this.fetchTicket();
    });
  }

  

}
