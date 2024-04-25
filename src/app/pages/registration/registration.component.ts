import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';

import { FormDataService } from '../../services/form-data.service';
import { CurrentStepService } from '../../services/current-step.service';

import { InputGroupComponent } from '../../components/input-group/input-group.component';
import { YourGoalComponent } from '../../components/your-goal/your-goal.component';
import { SelectGenderComponent } from '../../components/select-gender/select-gender.component';
import { YourActivityComponent } from '../../components/your-activity/your-activity.component';
import { BodyParametersComponent } from '../../components/body-parameters/body-parameters.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SelectGenderComponent,
    InputGroupComponent,
    YourGoalComponent,
    CommonModule,
    BodyParametersComponent,
    YourActivityComponent,
    NgIf,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private formDataService = inject(FormDataService);
  private currentStepService = inject(CurrentStepService);

  totalSteps: number = 5;
  currentStep: number = 1;

  constructor() {
    this.currentStepService.currentStep.subscribe((currentNumber) => {
      this.currentStep = currentNumber;
    });
  }

  signUpForm = this.fb.group({
    personalInfo: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    }),
    goalInfo: this.fb.group({
      goal: [''],
    }),
    genderInfo: this.fb.group({
      gender: [''],
      dateOfBirth: [''],
    }),
    parametersInfo: this.fb.group({
      height: [''],
      weight: [''],
    }),
    activityInfo: this.fb.group({
      activity: [''],
    }),
  });

  onBack(): void {
    this.currentStepService.onBack();
  }

  onSignUp() {
    if (this.currentStep === this.totalSteps) {
      this.formDataService.setFormData(this.signUpForm.value);
      this.authService.onSignUp();
      this.currentStepService.resetCurrentStep();
      return;
    } else {
      this.currentStepService.onNextStep();
    }
  }
}
