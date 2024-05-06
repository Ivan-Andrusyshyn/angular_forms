import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { SuccessFieldIconComponent } from '../../../shared/success-field-icon/success-field-icon.component';
import { ShowPasswordBtnComponent } from '../../show-password-btn/show-password-btn.component';
import { FormValidationDirective } from '../../../directives/form-validation.directive';

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
  ],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.css',
})
export class InputGroupComponent {
  @Input() pageIs: 'SignUp' | 'SignIn' = 'SignUp';
  @Input() formGroup!: FormGroup;

  isShowPassword: boolean = false;

  onPasswordShow() {
    this.isShowPassword = !this.isShowPassword;
  }

  getInputType(): string {
    return this.isShowPassword ? 'text' : 'password';
  }

  get passwordControl() {
    return this.formGroup.get('password');
  }
}
