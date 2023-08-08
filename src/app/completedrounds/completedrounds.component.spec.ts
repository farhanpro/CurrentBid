import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedroundsComponent } from './completedrounds.component';

describe('CompletedroundsComponent', () => {
  let component: CompletedroundsComponent;
  let fixture: ComponentFixture<CompletedroundsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedroundsComponent]
    });
    fixture = TestBed.createComponent(CompletedroundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
