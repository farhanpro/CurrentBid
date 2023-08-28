import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-bidding-status',
  templateUrl: './bidding-status.component.html',
  styleUrls: ['./bidding-status.component.css'],
  
})
export class BiddingStatusComponent {
  title = "Bidding Status";
  top10IndemandBlock = false;
  top10CurrentShow : boolean = false;
  top10AvailShow : boolean =false;

  
  constructor(private dialogRef : MatDialog){}
  public openModal( top10IndemandBlocks: boolean = false) {
    console.log(this.top10CurrentShow);
    this. top10IndemandBlock =  top10IndemandBlocks;
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  
  }

  coloseModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
   
    }
  }

  expandBiddingStatus : boolean = false;

  biddingStatus = {bidName :'Vacation Bid 101',bidPeriod:'Jan-08-2024 - Jan-05-2025',bidStatus :'In-progress'} 

  top10AvailableBlocks = 
  [
    {blockno : "Block 1",date:'Jan-08-2024 - Jan-14-2024'},{blockno : "Block 2",date:'Feb-01-2024 - Feb-06-2024'},
    {blockno : "Block 3",date:'Apr-02-2024 - Apr-08-2024'},{blockno : "Block 4",date:'May-02-2024 - May-08-2024'},
    {blockno : "Block 5",date:'Jul/02/2024 - Jul/08/2024'},{blockno : "Block 6",date:'Jul/02/2024 - Jul/08/2024'},
  ]
   
  top10IndemandBlocks = [
    {blockno : "Block 1",date:'01/02/2024 - 01/08/2024'},{blockno : "Block 2",date:'01/02/2024 - 01/08/2024'},
    {blockno : "Block 3",date:'01/02/2024 - 01/08/2024'},{blockno : "Block 4",date:'01/02/2024 - 01/08/2024'},
    {blockno : "Block 5",date:'01/02/2024 - 01/08/2024'},{blockno : "Block 6",date:'01/02/2024 - 01/08/2024'},
  ]

}
