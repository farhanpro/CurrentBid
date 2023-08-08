import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiddingStatusComponent } from './bidding-status.component';

describe('BiddingStatusComponent', () => {
  let component: BiddingStatusComponent;
  let fixture: ComponentFixture<BiddingStatusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BiddingStatusComponent]
    });
    fixture = TestBed.createComponent(BiddingStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
