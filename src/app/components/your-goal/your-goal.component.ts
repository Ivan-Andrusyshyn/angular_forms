import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-your-goal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './your-goal.component.html',
  styleUrl: './your-goal.component.css',
})
export class YourGoalComponent {
  @Input() formGroup: any;
}
