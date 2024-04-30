import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { CurrentStepService } from '../../services/current-step.service';
import { AuthService } from '../../services/auth.service';

import { InputGroupComponent } from '../../components/input-group/input-group.component';
import { YourGoalComponent } from '../../components/your-goal/your-goal.component';
import { SelectGenderComponent } from '../../components/select-gender/select-gender.component';
import { YourActivityComponent } from '../../components/your-activity/your-activity.component';
import { BodyParametersComponent } from '../../components/body-parameters/body-parameters.component';
import { createPasswordStrengthValidator } from './passwordValidator';
import { ErrorMessageComponent } from '../../components/error-message/error-message.component';
import { AuthImgComponent } from '../../components/auth-img/auth-img.component';
import { AuthLinkComponent } from '../../components/auth-link/auth-link.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SelectGenderComponent,
    InputGroupComponent,
    YourGoalComponent,
    AuthImgComponent,
    AuthLinkComponent,
    BodyParametersComponent,
    YourActivityComponent,
    CommonModule,
    NgIf,
    RouterLink,
    ErrorMessageComponent,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
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

  onSignUp() {
    if (this.currentStep === this.totalSteps) {
      this.authService.onSignUp();
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
