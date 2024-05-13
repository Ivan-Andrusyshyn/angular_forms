import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-your-goal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './your-goal.component.html',
  styleUrl: './your-goal.component.css',
})
export class YourGoalComponent {
  @Input() formGroup!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit() {
    this.formGroup.addControl(
      'goalInfo',
      this.fb.group({
        goal: ['Lose Fat'],
      })
    );
  }

  get formGroupControl() {
    return this.formGroup.controls['goalInfo'] as FormGroup;
  }
}
