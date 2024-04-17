import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { City } from '../../Models/City';
const Url : string = "https://localhost:7251/api/Home/GetAllCities";
@Injectable({
  providedIn: 'root'
})
export class GetCitiesService {
  constructor(private HTTPclient: HttpClient) { }

  getAll(){
    return this.HTTPclient.get<City[]>(Url);
  }
}
