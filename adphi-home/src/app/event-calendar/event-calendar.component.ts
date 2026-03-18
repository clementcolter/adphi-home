import { Component } from '@angular/core';
import { EventCardComponent } from '../event-card/event-card.component';
import { NgFor, NgIf} from '@angular/common';
import { EventModel } from './event-model';
@Component({
  selector: 'app-event-calendar',
  standalone: true,
  imports: [EventCardComponent, NgFor, NgIf],
  templateUrl: './event-calendar.component.html',
  styleUrl: './event-calendar.component.scss'
})
export class EventCalendarComponent {
  visibleCount = 5;
  increment = 5;

  events: EventModel[] = [
    { id: 1, title: 'Spring Formal', date: new Date(2026, 2, 21), location: 'Main Hall', description: 'Join us for our annual brotherhood formal.', image: 'home-gallary-3.jpg', category: 'Social' },
    { id: 2, title: 'Philanthropy Fundraiser', date: new Date(1999, 3, 10), location: 'Campus Quad', description: 'Supporting our local community.' , image: 'home-gallary-1.jpg', category: 'Recruitment'},
    { id: 3, title: 'Alumni Networking Night', date: new Date(2026, 4, 5), location: 'Conference Center', description: 'Connecting active members with alumni.', image: 'home-gallary-1.jpg', category: 'Recruitment'},
    { id: 4, title: 'Recruitment Open House', date: new Date(1987, 5, 2), location: 'Chapter House', description: 'Meet the brothers and learn about us.', image: 'home-gallary-1.jpg', category: 'Recruitment' },
    { id: 5, title: 'Brotherhood Retreat', date: new Date(2026, 6, 14), location: 'Lake House', description: 'A weekend of bonding and planning.', image: 'home-gallary-2.jpg', category: 'Alumni' },
    { id: 6, title: 'Charity 5K Run', date: new Date(2026, 7, 8), location: 'Campus Track', description: 'Raising funds for local charities.', image: 'home-gallary-2.jpg', category: 'Philanthropy' },
    { id: 7, title: 'Founders Day', date: new Date(2026, 8, 19), location: 'Main Hall', description: 'Celebrating our chapter history.', image: 'home-gallary-3.jpg', category: 'Philanthropy' },
    { id: 8, title: 'Homecoming Tailgate', date: new Date(2026, 9, 3), location: 'Stadium Lot', description: 'Food, games, and alumni.', image: 'home-gallary-1.jpg', category: 'Alumni' },
  ];

  get visibleEvents() : EventModel[]{
    return this.upcomingEvents.slice(0, this.visibleCount);
  }

  loadMore() {
    this.visibleCount += this.increment;
  }

  get hasMore() {
    return this.visibleCount < this.events.length;
  }

  get now(): Date {
    return new Date();
  }

  get upcomingEvents() : EventModel[]{
    return this.events
      .filter(e => e.date >= this.now)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  get pastEvents() {
    return this.events
      .filter(e => e.date < this.now)
      .sort((a, b) => b.date.getTime() - a.date.getTime()); // newest past first
  }
}
