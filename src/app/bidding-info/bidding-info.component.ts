import { Component } from '@angular/core';

interface bidRounds {
  roundName : string,
  awardedBlocks : number,
  roundStatus : string,
  biddingOpen : string,
  biddingClose : string,
  publishBy : string
}

@Component({
  selector: 'app-bidding-info',
  templateUrl: './bidding-info.component.html',
  styleUrls: ['./bidding-info.component.css']
})
export class BiddingInfoComponent {
  expandBidPeriodCard: boolean = false;
  expandRounds : boolean = false;
  cost : number = 10;
  pizza ={ 
    toppings :['pepperoni','bacon'],
    size : 'large'
  }

  currentBidInfo:any = 
  {
    bidPeriod :'01/08/2024 - 01/05/2025',
    bidName : 'Vacation bid 101',
    bidStatus:'In-progress'
  }
  currentRoundStatus: any = 
  
  {
    roundName:'Round 2',
    roundStatus:'Bidding Open',
    remaningBiddingTime:'5 days 5 hrs'
  }
  
  bidRounds:any={
   

  }

}
