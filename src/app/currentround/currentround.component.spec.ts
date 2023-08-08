import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentroundComponent } from './currentround.component';

describe('CurrentroundComponent', () => {
  let component: CurrentroundComponent;
  let fixture: ComponentFixture<CurrentroundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentroundComponent]
    });
    fixture = TestBed.createComponent(CurrentroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
