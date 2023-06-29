import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrackingComponent } from './new-tracking.component';

describe('NewTrackingComponent', () => {
  let component: NewTrackingComponent;
  let fixture: ComponentFixture<NewTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewTrackingComponent]
    });
    fixture = TestBed.createComponent(NewTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
