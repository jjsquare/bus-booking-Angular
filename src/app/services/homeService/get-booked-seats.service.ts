import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = "https://localhost:7251/api/Home/GetBookedSeats";

@Injectable({
  providedIn: 'root'
})
export class GetBookedSeatsService {
  public travelDate : string = '' ;
  public totalnumber : number = 40;
  public price :  number = 0;
  constructor(private httpClient :HttpClient) { }
  getGetAvailableSeat(busid :number , travelDate : string){
    return this.httpClient.post<number[]>(URL , {
      "busRouteId": busid,
      "travelDate": travelDate,
    });
  }
}
