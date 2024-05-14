import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { activities } from './activitiesArray';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-your-activity',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './your-activity.component.html',
  styleUrl: './your-activity.component.css',
})
export class YourActivityComponent {
  @Input() formGroup!: FormGroup;
  private fb = inject(FormBuilder);

  activities: string[] = activities;

  ngOnInit(): void {
    this.formGroup.addControl(
      'activityInfo',
      this.fb.group({
        activity: ['If you do not have physical activity and sedentary work'],
      })
    );
  }

  get formGroupControl() {
    return this.formGroup.controls['activityInfo'] as FormGroup;
  }
}
