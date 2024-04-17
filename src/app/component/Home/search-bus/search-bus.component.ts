import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GetCitiesService } from '../../../services/homeService/get-cities.service';
import { searchBus } from '../../../Models/searchBus';
import { GetBusService } from '../../../services/homeService/get-bus.service';
import { City } from '../../../Models/City';
// import {GetCitiesService} from '../../services/homeService/get-cities.service';

@Component({
  selector: 'app-search-bus',
  standalone: true,
  imports: [ReactiveFormsModule, RouterOutlet,RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './search-bus.component.html',
  styleUrl: './search-bus.component.css'
})
export class SearchBusComponent implements OnInit{

  fromCity : FormControl = new FormControl<number>(0,[
    Validators.required,
  ]);
  toCity : FormControl = new FormControl<number>(0,[
    Validators.required,
  ]);
  travelDate :FormControl =  new FormControl<String>('',
  [
    Validators.required,
  ]);
  today = new Date().toJSON().split('T')[0];
  cities: City[] = [];
  searchBus?: searchBus ;
  constructor(private getCityService : GetCitiesService,
    private route : ActivatedRoute,
    private router :Router,
    private service : GetBusService){

      this.fromCity.setValue(null);
      this.toCity.setValue(null);
      
  }
    ngOnInit() {
      this.getCityService.getAll().subscribe((response)=>{
        this.cities = response
     });
    }
     
    
  onSubmit() {
    this.searchBus = new searchBus(this.fromCity.value,this.toCity.value, this.travelDate.value);
    this.service.message = this.searchBus;
    this.service.fromCity = this.cities[this.fromCity.value-1].cityName;
    this.service.toCity = this.cities[this.toCity.value-1].cityName;
    this.router.navigate(['BusList']);
    console.log("done");
    
  }

}
