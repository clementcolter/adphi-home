import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  fullText = 'Manus Multae Cor Unum';
  displayedText = '';
  index = 0;

  images = [
    'home-gallary-1.jpg',
    'home-gallary-2.jpg',
    'home-gallary-3.jpg'
  ];

  newsItems = [
    {
      title: 'Example News Title',
      excerpt: 'This is a short preview of the news item that describes what happened.',
      image: 'home-gallary-2.jpg',
      date: 'March 10, 2025',
      link: '#'
    },
    {
      title: 'Community Update',
      excerpt: 'A brief update about recent changes and improvements.',
      image: 'home-gallary-1.jpg',
      date: 'March 10, 2025',
      link: '#'
    },
    {
      title: 'Upcoming Events',
      excerpt: 'See what’s coming up and how you can get involved.',
      image: 'home-gallary-3.jpg',
      date: 'March 10, 2025',
      link: '#'
    },
    {
      title: 'Example News Title',
      excerpt: 'This is a short preview of the news item that describes what happened.',
      image: 'home-gallary-2.jpg',
      date: 'March 10, 2025',
      link: '#'
    },
    {
      title: 'Community Update',
      excerpt: 'A brief update about recent changes and improvements.',
      image: 'home-gallary-1.jpg',
      date: 'March 10, 2025',
      link: '#'
    },
    {
      title: 'Upcoming Events',
      excerpt: 'See what’s coming up and how you can get involved.',
      image: 'home-gallary-3.jpg',
      date: 'March 10, 2025',
      link: '#'
    }
  ];

  currentIndex = 0;

  get currentImage() {
    return this.images[this.currentIndex];
  }

  typeText() {
    if (this.index < this.fullText.length) {
      this.displayedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), 120); // typing speed (lower = faster)
    }
  }

  ngOnInit() {
    this.typeText();
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 5000); // change every 5 seconds
  }
}
