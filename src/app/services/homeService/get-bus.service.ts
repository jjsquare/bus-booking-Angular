import { Injectable } from '@angular/core';
import { bus } from '../../Models/bus';
import { searchBus } from '../../Models/searchBus';
import { HttpClient } from '@angular/common/http';
import {  ReplaySubject, Subject } from 'rxjs';

const URL = "https://localhost:7251/api/Home/GetBusRouteList";

@Injectable({
  providedIn: 'root'
})
export class GetBusService {
  public message : searchBus  = new searchBus(0,0,'');
  public fromCity : string = '';
  public toCity : string = ''
  

  constructor(private httpClient : HttpClient) { }
  
  getAllBuses(search : searchBus){
    
    return this.httpClient.post<bus[]>(URL, {
      "fromCityId": search.fromCityId,
      "toCityId": search.toCityId,
      "travelDate": search.travelDate
    });
  }
}
