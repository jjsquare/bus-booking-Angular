import { Component } from '@angular/core';
import { printTicket } from '../../../Models/printTicket';
import { GetTicketService } from '../../../services/homeService/get-ticket.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  printTicket : printTicket = new printTicket();
  TicketId : number;
  constructor(private service : GetTicketService,
  private route : ActivatedRoute){
    this.TicketId = this.route.snapshot.params['id'];
    service.getTicket(this.TicketId).subscribe(response =>{
      this.printTicket = response;
    });
    console.log(this.printTicket);
    
  }
  onPrint() : void {
    window.print();
  }
}
