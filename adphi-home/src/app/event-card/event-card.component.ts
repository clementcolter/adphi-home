import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './event-card.component.html',
})
export class EventCardComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() date!: Date;
  @Input() location!: string;
  @Input() description!: string;
  @Input() showDetailsLink: boolean = true;
  @Input() compact: boolean = false;
  @Input() image?: string;
  @Input() category?: 'Social' | 'Philanthropy' | 'Recruitment' | 'Alumni';

  get isPast(): boolean {
    return this.date < new Date();
  }
}
