import { Component } from '@angular/core';
import { BlogPostComponent } from '../blog-post/blog-post.component';
@Component({
  selector: 'app-contribute',
  standalone: true,
  imports: [BlogPostComponent],
  templateUrl: './contribute.component.html',
  styleUrl: './contribute.component.scss'
})
export class ContributeComponent {

}
