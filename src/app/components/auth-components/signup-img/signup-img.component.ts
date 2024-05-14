import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-signup-img',
  standalone: true,
  imports: [],
  templateUrl: './signup-img.component.html',
  styleUrl: './signup-img.component.css',
})
export class SignupImgComponent {
  @Input() pageImage: string = '';
}
