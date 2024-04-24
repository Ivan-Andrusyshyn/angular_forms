import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-your-activity',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './your-activity.component.html',
  styleUrl: './your-activity.component.css',
})
export class YourActivityComponent {
  @Input() formGroup: any;
}
