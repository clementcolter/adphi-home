import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, NgIf, Location } from '@angular/common';
import { EventModel } from '../event-model';
import { Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  standalone: true,
  templateUrl: './event-calendar-detail.component.html',
  imports: [DatePipe, NgIf],
})
export class EventCalendarDetailComponent {

  event: any;
  
  events: EventModel[] = [
    { id: 1, title: 'Spring Formal', date: new Date(2026, 2, 21), location: 'Main Hall', description: 'Join us for our annual brotherhood formal.', image: 'home-gallary-3.jpg', category: 'Social', locationIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.104749944731!2d-93.23794952302353!3d44.973088871070104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d3e007c698b%3A0x9ddbf3b143714ea!2sCoffman%20Memorial%20Union!5e0!3m2!1sen!2sus!4v1772945527714!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'},
    { id: 2, title: 'Philanthropy Fundraiser', date: new Date(1999, 3, 10), location: 'Campus Quad', description: 'Supporting our local community.' , image: 'home-gallary-1.jpg', category: 'Recruitment', locationIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.104749944731!2d-93.23794952302353!3d44.973088871070104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d3e007c698b%3A0x9ddbf3b143714ea!2sCoffman%20Memorial%20Union!5e0!3m2!1sen!2sus!4v1772945527714!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'},
    { id: 3, title: 'Alumni Networking Night', date: new Date(2026, 4, 5), location: 'Conference Center', description: 'Connecting active members with alumni.', image: 'home-gallary-1.jpg', category: 'Recruitment', locationIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.104749944731!2d-93.23794952302353!3d44.973088871070104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d3e007c698b%3A0x9ddbf3b143714ea!2sCoffman%20Memorial%20Union!5e0!3m2!1sen!2sus!4v1772945527714!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'},
    { id: 4, title: 'Recruitment Open House', date: new Date(1987, 5, 2), location: 'Chapter House', description: 'Meet the brothers and learn about us.', image: 'home-gallary-1.jpg', category: 'Recruitment', locationIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.104749944731!2d-93.23794952302353!3d44.973088871070104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d3e007c698b%3A0x9ddbf3b143714ea!2sCoffman%20Memorial%20Union!5e0!3m2!1sen!2sus!4v1772945527714!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' },
    { id: 5, title: 'Brotherhood Retreat', date: new Date(2026, 6, 14), location: 'Lake House', description: 'A weekend of bonding and planning.', image: 'home-gallary-2.jpg', category: 'Alumni', locationIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.104749944731!2d-93.23794952302353!3d44.973088871070104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d3e007c698b%3A0x9ddbf3b143714ea!2sCoffman%20Memorial%20Union!5e0!3m2!1sen!2sus!4v1772945527714!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'},
    { id: 6, title: 'Charity 5K Run', date: new Date(2026, 7, 8), location: 'Campus Track', description: 'Raising funds for local charities.', image: 'home-gallary-2.jpg', category: 'Philanthropy', locationIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.104749944731!2d-93.23794952302353!3d44.973088871070104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d3e007c698b%3A0x9ddbf3b143714ea!2sCoffman%20Memorial%20Union!5e0!3m2!1sen!2sus!4v1772945527714!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' },
    { id: 7, title: 'Founders Day', date: new Date(2026, 8, 19), location: 'Main Hall', description: 'Celebrating our chapter history.', image: 'home-gallary-3.jpg', category: 'Philanthropy', locationIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.104749944731!2d-93.23794952302353!3d44.973088871070104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d3e007c698b%3A0x9ddbf3b143714ea!2sCoffman%20Memorial%20Union!5e0!3m2!1sen!2sus!4v1772945527714!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' },
    { id: 8, title: 'Homecoming Tailgate', date: new Date(2026, 9, 3), location: 'Stadium Lot', description: 'Food, games, and alumni.', image: 'home-gallary-1.jpg', category: 'Alumni', locationIframe:'<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5645.104749944731!2d-93.23794952302353!3d44.973088871070104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32d3e007c698b%3A0x9ddbf3b143714ea!2sCoffman%20Memorial%20Union!5e0!3m2!1sen!2sus!4v17729455277１４！5m２！１sen！２sus" width="6００" height="４５０" style="border:０；" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>' },
  ];

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private sanitizer: DomSanitizer) {
    
  }

  ngOnInit() {
    // In the future this would reach out to a backend to fetch the event by ID, but for now we'll just pull it from the static list
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = this.events.find(e => e.id === id);
    this.event.locationIframe = this.sanitizer.bypassSecurityTrustHtml(this.event.locationIframe);
  }

  goBack() {
    if (window.history.length > 1) {
      this.location.back();
    } else {
      this.router.navigate(['/events']);
    }
  }

  get googleCalendarLink(): string {
    const start = this.formatDate(this.event.date);
    const end = this.formatDate(new Date(this.event.date.getTime() + 2 * 60 * 60 * 1000));

    return `https://www.google.com/calendar/render?action=TEMPLATE
      &text=${encodeURIComponent(this.event.title)}
      &dates=${start}/${end}
      &details=${encodeURIComponent(this.event.description)}
      &location=${encodeURIComponent(this.event.location)}
      &sf=true&output=xml`;
  }

  formatDate(date: Date): string {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  }
}