import { inject, Injectable } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  Validators,
} from '@angular/forms';

import { createPasswordStrengthValidator } from '../validations/passwordValidator';
import { ageValidator } from '../validations/dateOfBirthValidator';

@Injectable({
  providedIn: 'root',
})
export class FormDataService {
  private fb = inject(FormBuilder);

  constructor() {}

  signUpForm = this.fb.group({
    personalInfo: this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12),
        ],
      ],
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
      dateOfBirth: ['', [Validators.required, ageValidator(16)]],
    }),
    parametersInfo: this.fb.group({
      height: ['', Validators.required],
      weight: ['', Validators.required],
    }),
    activityInfo: this.fb.group({
      activity: ['If you do not have physical activity and sedentary work'],
    }),
  });
}
