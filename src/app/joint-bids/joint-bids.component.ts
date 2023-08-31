import { Component } from '@angular/core';

interface myRequestRoundPreferece {
  roundNumber: number;
  date: string;
  jointBidPartner: string;
  partnerMasterSeniorityRank: number;
  partnerGroupSeniorityRank: number;
  jointAwardOption: string;
  requestStatus: string;
  awardStatus: string;
  isShow: boolean;
}

interface myRequestRound2 {
  roundNumber: number;
  date:string;
  availableBlockCapacityForMe: number;
  jointBidPartner: string;
  partnerMasterSeniorityRank: number;
  partnerGroupSeniorityRank: number;
  jointAwardOption: string;
  requestStatus: string;
  isShow:boolean;
}

interface recivedRequest 
{
  date:string;
  roundNumber : number;
  jointBidPartner:string;
  partnerMasterSeniorityRank:number;
  partnerGroupSeniorityRank:number;
  requestStatus:string;
  awardedStatus:string;
  isShow:boolean;
}

@Component({
  selector: 'app-joint-bids',
  templateUrl: './joint-bids.component.html',
  styleUrls: ['./joint-bids.component.css'],
})
export class JointBidsComponent {
  currentRoundsVisible: boolean = true;
  completedRoundsVisible: boolean = false;
  completedRoundsVisible2: boolean = false;

  preferenceRoundone: boolean = true;
  expandBidPeriodCard: boolean = false;
  expandRounds: boolean = false;
  expandRound1: boolean = false;
  expandRound2: boolean = false;
  partnerGroupSeniorityRank = false;
  cancelJointBids : boolean = false ;


  public openCancelModal(cancelJointBids : boolean = false){
    this.cancelJointBids = cancelJointBids;
    const modelDiv = document.getElementById('cancelJointbids')
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }

  public closeCancelModal(){
    const modelDiv = document.getElementById('cancelJointbids')
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  public openModal( partnerGroupSeniorityRank: boolean = false) {
    this. partnerGroupSeniorityRank =  partnerGroupSeniorityRank;
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

  myRequest: myRequestRoundPreferece[] = [
    {
      roundNumber: 1,
      date: 'Nov-10-2023 to Nov-16-2023',
      jointBidPartner: 'Marlenes Charles(014132)',
      partnerMasterSeniorityRank: 12,
      partnerGroupSeniorityRank: 10,
      jointAwardOption: 'Award Anyway',
      requestStatus: 'Accepted',
      awardStatus: 'Awarded',
      isShow: false,
    },
    {
      roundNumber: 1,
      date: 'Sep-02-2023 to Sep-08-2023',
      jointBidPartner: 'Ana Chang(029654)',
      partnerMasterSeniorityRank: 14,
      partnerGroupSeniorityRank: 10,
      jointAwardOption: 'Award Anyway',
      requestStatus: 'Accepted',
      awardStatus: 'Not Awarded',
      isShow: false,
    },
  ];
  myRequestRound2 : myRequestRound2[] = [
    {
      roundNumber:2,
      date:"Jul-02-2024 to  Jul-08-2024",
      availableBlockCapacityForMe:12,
      jointBidPartner:'Marlene Charles(014132)',
      partnerMasterSeniorityRank:12,
      partnerGroupSeniorityRank:10,
      jointAwardOption:'Award Anyway',
      requestStatus:'Pending',
      isShow:false
    },
    {
      roundNumber:2,
      date:"Dec-28-2024 to Jan-03-2025",
      availableBlockCapacityForMe:10,
      jointBidPartner:"Marlenes Charles(014132)",
      partnerMasterSeniorityRank:12,
      partnerGroupSeniorityRank:10,
      jointAwardOption:"Award Anyway",
      requestStatus:"Pending",
      isShow:false
    }
  ]
  recivedRequest : recivedRequest [] =[
    {date:"Oct-02-2023 to Oct-08-2023",roundNumber:1,jointBidPartner:"Wang Xinyi(24691)",partnerMasterSeniorityRank:12,partnerGroupSeniorityRank:10,requestStatus:"Accepted",awardedStatus:"Not Awarded",isShow:false},
    {date:"Nov-24-2023 to Nov-30-2023",roundNumber:2,jointBidPartner:"Rick Chan(009842)",partnerMasterSeniorityRank:12,partnerGroupSeniorityRank:10,requestStatus:"Accepted",awardedStatus:"Awarded",isShow:false},
   
  ]


  showCurrentRound() {
    this.currentRoundsVisible = !this.currentRoundsVisible;
    this.completedRoundsVisible = false;
  }

  showCompletedRounds() {
    this.completedRoundsVisible = !this.completedRoundsVisible;
    this.currentRoundsVisible = false;
  }
  ngOnInit() {}
}
