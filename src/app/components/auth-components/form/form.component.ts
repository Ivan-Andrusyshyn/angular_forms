import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';

import { AuthService } from '../../../services/auth.service';
import { CurrentStepService } from '../../../services/current-step.service';

import { createPasswordStrengthValidator } from '../form/passwordValidator';

import { InputGroupComponent } from '../input-group/input-group.component';
import { YourGoalComponent } from '../your-goal/your-goal.component';
import { SelectGenderComponent } from '../select-gender/select-gender.component';
import { BodyParametersComponent } from '../body-parameters/body-parameters.component';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { YourActivityComponent } from '../your-activity/your-activity.component';
import { UserData } from '../../models/UserData';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    SelectGenderComponent,
    InputGroupComponent,
    YourGoalComponent,
    BodyParametersComponent,
    YourActivityComponent,
    ErrorMessageComponent,

    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private currentStepService = inject(CurrentStepService);

  totalSteps: number = 5;
  currentStep: number = 1;

  constructor() {
    this.currentStepService.currentStep
      .pipe(takeUntilDestroyed())
      .subscribe((currentNumber) => {
        this.currentStep = currentNumber;
      });
  }

  signUpForm = this.fb.group({
    personalInfo: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          createPasswordStrengthValidator(),
        ],
      ],
    }),
    goalInfo: this.fb.group({
      goal: ['Lose Fat'],
    }),
    genderInfo: this.fb.group({
      gender: ['Male'],
      dateOfBirth: [''],
    }),
    parametersInfo: this.fb.group({
      height: [''],
      weight: [''],
    }),
    activityInfo: this.fb.group({
      activity: ['If you do not have physical activity and sedentary work'],
    }),
  });

  onBack(): void {
    this.currentStepService.onBack();
  }

  onSignUp(): void {
    if (this.currentStep === this.totalSteps) {
      const userData = this.signUpForm.value as UserData;

      this.authService.onSignUp(userData);
      this.currentStepService.resetCurrentStep();
      return;
    } else if (!this.signUpForm.invalid) {
      this.currentStepService.onNextStep();
    }
  }

  isInvalid(controlName: string): boolean {
    const control = this.signUpForm.controls.personalInfo.get(controlName);
    return (
      (control?.invalid &&
        (control?.dirty || control?.touched) &&
        !this.signUpForm.errors?.['incorrectFields']) ||
      false
    );
  }

  get passwordControl() {
    return this.signUpForm.controls.personalInfo.get('password');
  }
}
