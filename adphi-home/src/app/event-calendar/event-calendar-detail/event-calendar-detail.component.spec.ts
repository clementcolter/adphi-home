import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCalendarDetailComponent } from './event-calendar-detail.component';

describe('EventCalendarDetailComponent', () => {
  let component: EventCalendarDetailComponent;
  let fixture: ComponentFixture<EventCalendarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventCalendarDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventCalendarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
