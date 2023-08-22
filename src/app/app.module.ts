import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BiddingStatusComponent } from './bidding-status/bidding-status.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MybidsComponent } from './mybids/mybids.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgFor, NgIf } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule, Routes } from '@angular/router';
import { BiddingInfoComponent } from './bidding-info/bidding-info.component';
import { CurrentroundComponent } from './currentround/currentround.component';
import { CompletedroundsComponent } from './completedrounds/completedrounds.component';
import { ServiceService } from './service.service';
import { CommonModule } from '@angular/common';
import { JointBidsComponent } from './joint-bids/joint-bids.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { HeadersComponent } from './headers/headers.component';


const routes: Routes = [
  { path: '', component: BiddingInfoComponent },
  { path: 'bidding-status', component: BiddingStatusComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'my-bids', component: MybidsComponent },
  { path: 'current-rounds', component: CurrentroundComponent },
  { path: 'completed-rounds', component: CompletedroundsComponent },
  { path: 'app-joint-bids', component: JointBidsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BiddingStatusComponent,
    MyProfileComponent,
    BiddingInfoComponent,
    CurrentroundComponent,
    CompletedroundsComponent,
    JointBidsComponent,
    HeadersComponent,
    
  ],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    NgFor,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatDialogModule,
    MatIconModule,
  ],
  exports: [RouterModule],
  providers: [ServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
