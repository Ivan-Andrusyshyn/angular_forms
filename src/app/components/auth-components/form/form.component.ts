import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';

import { AuthService } from '../../../services/auth.service';
import { CurrentStepService } from '../../../services/current-step.service';

import { ErrorMessageComponent } from '../error-message/error-message.component';
import { UserData } from '../../models/UserData';
import { FormElementsComponent } from '../form-elements/form-elements.component';

const formDataKeysArr = [
  'personalInfo',
  'goalInfo',
  'genderInfo',
  'parametersInfo',
  'activityInfo',
];

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  private authService = inject(AuthService);
  private currentStepService = inject(CurrentStepService);
  private fb = inject(FormBuilder);

  totalSteps: number = 5;
  currentStep: number = 1;
  signUpForm = this.fb.group({});

  constructor() {
    this.currentStepService.currentStep$
      .pipe(takeUntilDestroyed())
      .subscribe((currentNumber$: number) => {
        this.currentStep = currentNumber$;
      });
  }

  onBack(): void {
    this.currentStepService.onBack();
  }

  onSignUp(): void {
    const currentFormGroup = this.signUpForm.get(
      formDataKeysArr[this.currentStep - 1]
    );

    if (currentFormGroup?.invalid) return;

    if (this.currentStep === this.totalSteps) {
      const userData = this.signUpForm.value as UserData;

      this.authService.onSignUp(userData);
      this.currentStepService.resetCurrentStep();
      this.removeControls();
      return;
    } else {
      this.currentStepService.onNextStep();
    }
  }

  removeControls() {
    this.signUpForm.removeControl('personalInfo');
    this.signUpForm.removeControl('genderInfo');
    this.signUpForm.removeControl('goalInfo');
    this.signUpForm.removeControl('parametersInfo');
    this.signUpForm.removeControl('activityInfo');
  }
}
