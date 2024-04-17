import { Injectable } from '@angular/core';
import { printTicket } from '../../Models/printTicket';
import { HttpClient } from '@angular/common/http';
const URL  = "https://localhost:7251/api/Home/GetBookingDetailsByBookingIdWithDate?bookingId=";
@Injectable({
  providedIn: 'root'
})
export class GetTicketService {
  printTicket? : printTicket
  constructor(private httpClient : HttpClient) { }
  query : string = "";
  getTicket (brId : number){
    this.query  = URL + brId.toString();
    console.log(this.query);
    return this.httpClient.get<printTicket>(this.query);
  }
}
