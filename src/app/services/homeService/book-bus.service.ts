import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { passenger } from '../../Models/passenger';

const URL = "https://localhost:7251/api/Home/MakeBooking"
@Injectable({
  providedIn: 'root'
})
export class BookBusService {

  constructor(private httpClient : HttpClient) { }
  private postobj :{} ={};
  post(busrouteId : number, travelDate : string, passengers : passenger[]){
    this.postobj = {
        "busRouteId": busrouteId,
        "transactionID": 1234,
        "travelDate": travelDate,
        "bookingDetails": passengers,
    };
    return this.httpClient.post<number>(URL, this.postobj)
    
    
  }

}
