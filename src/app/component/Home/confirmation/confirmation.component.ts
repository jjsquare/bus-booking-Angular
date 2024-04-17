import { Component } from '@angular/core';
import { Confirmationservice } from '../../../services/homeService/confirmationservice.service';
import { passenger } from '../../../Models/passenger';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  selectedSeats : passenger[] =[];
  constructor(
    private confirmationService : Confirmationservice,
    private route : ActivatedRoute,
    private router : Router){
    this.confirmationService.getMessage.subscribe(msg => this.selectedSeats = msg);
  }

  onsubmit(){
    this.router.navigate(['ticket'])
  }
}
