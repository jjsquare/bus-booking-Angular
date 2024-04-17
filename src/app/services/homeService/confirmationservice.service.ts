import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { passenger } from '../../Models/passenger';

@Injectable({
  providedIn: 'root'
})
export class Confirmationservice {
  selectedSeat : passenger[] = [];
  private message = new BehaviorSubject(this.selectedSeat);
  getMessage = this.message.asObservable();
  constructor() { }

  setMessage(selectedSeats : passenger[]){
    this.message.next(selectedSeats)
  }
}
