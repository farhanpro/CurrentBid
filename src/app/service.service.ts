import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  

  currentRoundsVisible : boolean = true;
  completedRoundsVisible : boolean = false;

 
  showCurrentRounds(){
    this.currentRoundsVisible = true;
    this.completedRoundsVisible  = false;
  }

  showCompletedRounds(){
    this.currentRoundsVisible = false;
    this.completedRoundsVisible  = true;
  }
}
