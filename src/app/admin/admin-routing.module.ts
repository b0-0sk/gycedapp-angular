import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { TicketEditComponent } from './components/ticket-edit/ticket-edit.component';
import { TicketListComponent } from './components/ticket-list/ticket-list.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      },
      {
        path: 'users',
        component: TableComponent
      },
      {
        path: 'tickets',
        component: TicketListComponent
      },
      {
        path: 'tickets/create',
        component: TicketEditComponent
      },
      {
        path: 'tickets/edit/:id',
        component: TicketEditComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
