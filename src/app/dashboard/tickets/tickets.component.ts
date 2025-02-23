import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [
    NewTicketComponent
  ],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css'
})
export class TicketsComponent {

}
