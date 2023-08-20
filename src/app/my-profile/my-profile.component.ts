import { Component,ViewEncapsulation } from '@angular/core';

interface randomAwardMode {
  value: string;
  viewValue: string;
}
interface totalEntitlement {
  value:string;
  daysHrs:number
}

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css'],
  encapsulation: ViewEncapsulation.None // Apply global styles to the component
 
})
export class MyProfileComponent {


  expandMyInfo : boolean = false ;
  expandBiddingPreference : boolean = false;
  selectedValue?: string;
  selectedCar?: string;
  groupSeniorityRank = false;
  public openModal( groupSeniorityRanks : boolean = false) {
    this.groupSeniorityRank = groupSeniorityRanks;
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

  raw :  randomAwardMode[] = [
    {value: 'next to my off Weeks', viewValue: 'next to my off Weeks'},
    {value: 'truly random', viewValue: 'truly random'},
  
  ];

  myInfo = {
    employeeNo:6732,
    bidGroup:'YVR-CSV',
    masterSenioratyRank:1,
    groupSenioratyRank:1,
    workGroup:'YVR',
    eaType:'Fulltime Regular'
  }

  tet : totalEntitlement[] = [
    {value :'Credit Vacation Hrs', daysHrs:80},
    {value :'Non-credit Vacation Hrs', daysHrs:20},
    {value :'Stat Hrs', daysHrs:0},
    {value :'Stat Days', daysHrs:11},
    // {value : 'Total Hrs', daysHrs:188}
  ]
   total = this.tet.reduce((acc, item) => acc + item.daysHrs, 0);

}
