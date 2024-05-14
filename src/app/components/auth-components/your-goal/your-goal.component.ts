import { NgFor } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { goals } from './goalsArray';

@Component({
  selector: 'app-your-goal',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './your-goal.component.html',
  styleUrl: './your-goal.component.css',
})
export class YourGoalComponent {
  @Input() formGroup!: FormGroup;
  goals: string[] = goals;

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
