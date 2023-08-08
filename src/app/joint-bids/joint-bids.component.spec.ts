import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointBidsComponent } from './joint-bids.component';

describe('JointBidsComponent', () => {
  let component: JointBidsComponent;
  let fixture: ComponentFixture<JointBidsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JointBidsComponent]
    });
    fixture = TestBed.createComponent(JointBidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
