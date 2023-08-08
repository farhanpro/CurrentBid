import { Component, Injectable, ViewEncapsulation ,OnInit } from '@angular/core';
import {DateAdapter, NativeDateAdapter ,MatNativeDateModule} from '@angular/material/core';
import {MatDateRangeSelectionStrategy,DateRange,MAT_DATE_RANGE_SELECTION_STRATEGY,MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';  
import {MatIconModule} from '@angular/material/icon';   
import { NgFor } from '@angular/common';
import { ServiceService } from '../service.service';
import { CommonModule } from '@angular/common';


interface roundPreferece{
  preference:string;
  date : string;
  isShow:boolean;
  jointBidWith:string;
  bidGsr:string;
  availbleBlockCapacity:number;
}

@Injectable()

export class FiveDayRangeSelectionStrategy<D> implements MatDateRangeSelectionStrategy<D> {
  constructor(private _dateAdapter: DateAdapter<D>) {}
  
  selectionFinished(date: D | null): DateRange<D> {
    return this._createFiveDayRange(date);
  }
  
  createPreview(activeDate: D | null): DateRange<D> {
    return this._createFiveDayRange(activeDate);
  }
  
  private _createFiveDayRange(date: D | null): DateRange<D> {
    if (date) {
      const dayOfWeek = this._dateAdapter.getDayOfWeek(date);
      let startOfWeek = this._dateAdapter.addCalendarDays(date, -dayOfWeek+1);
      const endOfWeek = this._dateAdapter.addCalendarDays(startOfWeek , 6);
      return new DateRange<D>(startOfWeek, endOfWeek);
      
    }
    return new DateRange<D>(null, null);
  }

}

export class CustomDateAdapter extends NativeDateAdapter {
  // parse the date from input component as it only expect dates in
  // mm-dd-yyyy format
  
  override parse(value: any): Date | null {
    if (typeof value === 'string' && value.indexOf('/') > -1) {
      const str = value.split('/');

      const year = Number(str[2]);
      const month = Number(str[1]) - 1;
      const date = Number(str[0]);

      return new Date(year, month, date);
    }
    const timestamp = typeof value === 'number' ? value : Date.parse(value);
    return isNaN(timestamp) ? null : new Date(timestamp);
  }

  override getFirstDayOfWeek(): number {
    return 1     ;
  }
}

@Component({
  selector: 'app-mybids',
  templateUrl: './mybids.component.html',
  styleUrls: ['./mybids.component.css'],
  providers: [{provide: MAT_DATE_RANGE_SELECTION_STRATEGY,useClass: FiveDayRangeSelectionStrategy},{provide: DateAdapter, useClass: CustomDateAdapter }],
  standalone: true,
  imports: [NgFor,MatFormFieldModule,MatInputModule, MatDatepickerModule, MatNativeDateModule,MatButtonModule,MatIconModule,CommonModule],
  encapsulation: ViewEncapsulation.None
})
export class MybidsComponent implements OnInit {

  currentRoundsVisible : boolean = true;
  completedRoundsVisible : boolean = false;
  preferenceRoundone : boolean = true;

  expandBidPeriodCard: boolean = false;
  expandRounds : boolean = false;

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    console.log(dateRangeStart.value);
    console.log(dateRangeEnd.value);
  }

  preference : roundPreferece[ ]= [
    {preference:"Preference 1",date:"01/02/2024-01/08/2024",isShow:false,jointBidWith:"Marlenes Charls",bidGsr:"1(Pending joint Bid Approval)",availbleBlockCapacity:2},
    {preference:"Preference 2",date:"07/02/2024-07/08/2024",isShow:false,jointBidWith:"Tauseef Patel",bidGsr:"1(Pending joint Bid Approval)",availbleBlockCapacity:2},
    {preference:"Preference 3",date:"02/02/2024-02/08/2024",isShow:false,jointBidWith:"Farhan",bidGsr:"1(Pending joint Bid Approval)",availbleBlockCapacity:2},

  ]
  constructor(public roundService: ServiceService ) {}
  public openModal( ) {
    
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

  showCurrentRound() {
    this.currentRoundsVisible = !this.currentRoundsVisible
    this.completedRoundsVisible = false;
  }

  showCompletedRounds() {
    this.completedRoundsVisible = !this.completedRoundsVisible;
    this.currentRoundsVisible = false;
  }
  ngOnInit() {}
}
