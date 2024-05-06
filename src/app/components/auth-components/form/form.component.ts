import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';

import { AuthService } from '../../../services/auth.service';
import { CurrentStepService } from '../../../services/current-step.service';
import { FormDataService } from '../../../services/form-data.service';

import { ErrorMessageComponent } from '../error-message/error-message.component';
import { UserData } from '../../models/UserData';
import { FormElementsComponent } from '../form-elements/form-elements.component';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [
    ErrorMessageComponent,
    FormElementsComponent,

    NgIf,
    ReactiveFormsModule,
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  private authService = inject(AuthService);
  private currentStepService = inject(CurrentStepService);
  private formDataService = inject(FormDataService);

  totalSteps: number = 5;
  currentStep: number = 1;
  signUpForm;
  constructor() {
    this.currentStepService.currentStep
      .pipe(takeUntilDestroyed())
      .subscribe((currentNumber) => {
        this.currentStep = currentNumber;
      });

    this.signUpForm = this.formDataService.signUpForm;
  }

  onBack(): void {
    this.currentStepService.onBack();
  }

  onSignUp(): void {
    const formGroup = this.formDataService.signUpForm;
    const currentFormGroup = formGroup.get(`personalInfo`);

    if (this.currentStep === this.totalSteps) {
      const userData = formGroup.value as UserData;

      this.authService.onSignUp(userData);
      this.currentStepService.resetCurrentStep();
      return;
    } else if (currentFormGroup?.valid) {
      this.currentStepService.onNextStep();
    }
  }

  isInvalid(controlName: string): boolean {
    const control =
      this.formDataService.signUpForm.controls.personalInfo.get(controlName);

    return (
      (control?.invalid &&
        (control?.dirty || control?.touched) &&
        !this.formDataService.signUpForm.errors?.['incorrectFields']) ||
      false
    );
  }

  get passwordControl() {
    return this.formDataService.signUpForm.controls.personalInfo.get(
      'password'
    );
  }
}
