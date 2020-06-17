import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { TableComponent } from './components/table/table.component';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TicketEditComponent } from './components/ticket-edit/ticket-edit.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

@NgModule({
  declarations: [TicketEditComponent, NavComponent, TableComponent, DashboardComponent, TicketListComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ]
})
export class AdminModule { }
