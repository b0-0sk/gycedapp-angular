import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TicketService } from '../../../core/service/httpclient/ticket/ticket.service';


@Component({
  selector: 'app-product-edit',
  templateUrl: './ticket-edit.component.html',
  styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(
    private formBuilder: FormBuilder,
    private ticketService: TicketService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.ticketService.getTicket()
      .subscribe(ticket => {
        this.form.patchValue(ticket);
      });
    });
  }

  saveTicket(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const ticket = this.form.value;
      this.ticketService.editTicket(ticket)
      .subscribe((newTicket) => {
        console.log(newTicket);
        this.router.navigate(['./admin/tickets']);
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }
}
