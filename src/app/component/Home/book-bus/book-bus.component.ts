import { Component, OnInit, Output, output } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GetBookedSeatsService } from '../../../services/homeService/get-booked-seats.service';
import { CommonModule } from '@angular/common';
import { passenger } from '../../../Models/passenger'; 
import { BookBusService } from '../../../services/homeService/book-bus.service';


@Component({
  selector: 'app-book-bus',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule,FormsModule],
  templateUrl: './book-bus.component.html',
  styleUrl: './book-bus.component.css'
})
export class BookBusComponent implements OnInit {
  busid: number;
  bookedSeat : number[] = [];
  selectedSeats : passenger[] = [];
  totalSeats:number[] =[];
  travelDate : string;
  seatPrice :number;
  private bookingid : number = 15;
  constructor(
    private route : ActivatedRoute,
    private router : Router,
    service : GetBookedSeatsService,
    // private confirmationService : Confirmationservice
    private bookService : BookBusService,
  ){
    this.travelDate = service.travelDate;
    this.seatPrice = service.price;
    this.busid = this.route.snapshot.params['id'];
    service.getGetAvailableSeat(this.busid, this.travelDate).subscribe(response =>{
      this.bookedSeat = response;
    });
    for(let i=0;i<service.totalnumber;i++){
      this.totalSeats.push(i + 1);
    }
  }
  ngOnInit(): void {
  }
  onSubmit(){
    //make post request here
    // this.confirmationService.setMessage(this.selectedSeats);
    console.log(this.selectedSeats);
    this.bookService.post(this.busid, this.travelDate, this.selectedSeats).subscribe(response =>{
      this.bookingid = response;
      
    });
    this.router.navigate(['ticket/'+this.bookingid])
  }
  addSeat(seat:number){
    if(this.bookedSeat.includes(seat)){
      alert("seat is already booked");
      return;
    }
    const index = this.selectedSeats.findIndex(passenger => passenger.seatNumber === seat);
  if (index !== -1) {
    this.selectedSeats.splice(index, 1);
  } else {
    this.selectedSeats.push(new passenger(seat));
  }
  }

  isSelected(seat : number) : boolean{
    const index = this.selectedSeats.findIndex(passenger => passenger.seatNumber === seat);
    return index !== -1 ? false:true;
  }

  isOkay() : boolean{
    if(this.selectedSeats.length == 0){
      return false;
    }
    // console.log(this.selectedSeats.length)
    for(let seat of this.selectedSeats){
      if(seat.age != null){
        if(seat.age <= 14){
          seat.price = this.seatPrice/2;
        }else{
          seat.price = this.seatPrice;
        }
      }
      if(seat.passengerName == null || seat.passengerName.length ==0){
        // console.log()
        return false;
      }if(seat.age == null || seat.age == 0){
        return false;
      }
    }
  return true;
  }
}
