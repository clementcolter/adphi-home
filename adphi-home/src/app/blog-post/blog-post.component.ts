import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [NgIf],
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent {
  @Input() title = '';
  @Input() image = '';
  @Input() author = 'Anonymous';
  @Input() date = '';
  @Input() content = '';
}