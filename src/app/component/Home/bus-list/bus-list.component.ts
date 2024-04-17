import { Component, OnInit, Pipe } from '@angular/core';
import { bus } from '../../../Models/bus';
import { pipe } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GetBusService } from '../../../services/homeService/get-bus.service';
import { searchBus } from '../../../Models/searchBus';
import { GetBookedSeatsService } from '../../../services/homeService/get-booked-seats.service';

@Component({
  selector: 'app-bus-list',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.css'
})
export class BusListComponent implements OnInit {

  busArray : bus[] = []; 
  searchbus : searchBus;
  fromCity : string = '';
  toCity : string = '';

  constructor(private service : GetBusService,
     private route : ActivatedRoute,
     private router : Router,
     private getbookedSeats : GetBookedSeatsService
  ){
    this.searchbus = this.service.message;
    this.fromCity = this.service.fromCity;
    this.toCity = this.service.toCity;

    console.log(this.searchbus);
  }
  ngOnInit(): void {
    this.service.getAllBuses(this.searchbus).subscribe((response: bus[]) => {
      response.forEach((item: bus) => {
        this.busArray.push(item);
  });
});
console.log(this.busArray);

  }
  onSubmit(busid :number , totalSeats : number, price :number){
    this.getbookedSeats.totalnumber = totalSeats;
    this.getbookedSeats.travelDate = this.searchbus.travelDate;
    this.getbookedSeats.price = price;
    this.router.navigate([`bookbus/${busid}`]);
  }
}
