import { Component } from '@angular/core';
import { ButtonComponent } from "../../../shared/button/button.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent,FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  host: {
    "name":'textarea',
    "(click)": "onClick()"
  }
})
export class NewTicketComponent  {
  onClick() {
    console.log("hii");
  }
sub(input:string,form:HTMLFormElement) {
console.log(input);
form.reset();
}


}
