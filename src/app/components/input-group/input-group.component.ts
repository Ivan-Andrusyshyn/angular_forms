import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SuccessFieldIconComponent } from '../success-field-icon/success-field-icon.component';
import { ShowPasswordBtnComponent } from '../show-password-btn/show-password-btn.component';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    SuccessFieldIconComponent,
    NgClass,
    ShowPasswordBtnComponent,
  ],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.css',
})
export class InputGroupComponent {
  @Input() pageIs: 'SignUp' | 'SignIn' = 'SignUp';
  @Input() formGroup: any;

  isShowPassword: boolean = false;

  onPasswordShow() {
    this.isShowPassword = !this.isShowPassword;
  }

  getInputType(): string {
    return this.isShowPassword ? 'text' : 'password';
  }

  isValid(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return control?.valid && (control.dirty || control.touched);
  }

  isInvalid(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return control.invalid && (control.dirty || control.touched);
  }

  get passwordControl() {
    return this.formGroup.get('password');
  }
}
