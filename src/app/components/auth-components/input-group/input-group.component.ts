import { NgClass, NgIf } from '@angular/common';
import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { SuccessFieldIconComponent } from '../../../shared/success-field-icon/success-field-icon.component';
import { ShowPasswordBtnComponent } from '../../show-password-btn/show-password-btn.component';
import { FormValidationDirective } from '../../../directives/form-validation.directive';
import { createPasswordStrengthValidator } from '../../../validations/passwordValidator';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass,
    FormValidationDirective,

    SuccessFieldIconComponent,
    ShowPasswordBtnComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.css',
})
export class InputGroupComponent implements OnInit {
  @Input() pageIs: 'SignUp' | 'SignIn' = 'SignUp';
  @Input() formGroup!: FormGroup;

  private fb = inject(FormBuilder);

  isShowPassword: boolean = false;

  ngOnInit(): void {
    if (this.pageIs === 'SignUp') {
      this.formGroup.addControl(
        'personalInfo',
        this.fb.group({
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
        })
      );
    } else {
      this.formGroup.addControl(
        'personalInfo',
        this.fb.group({
          email: ['', [Validators.required, Validators.email]],
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(6),
              createPasswordStrengthValidator(),
            ],
          ],
        })
      );
    }
  }

  onPasswordShow() {
    this.isShowPassword = !this.isShowPassword;
  }

  getInputType(): string {
    return this.isShowPassword ? 'text' : 'password';
  }

  get passwordControl() {
    return this.formGroupControl.get('password');
  }

  get formGroupControl() {
    return this.formGroup.controls['personalInfo'] as FormGroup;
  }

  isInvalid(controlName: string): boolean {
    const control = this.formGroupControl.get(controlName);

    return (control?.invalid && control?.dirty) || control?.touched || false;
  }
}
