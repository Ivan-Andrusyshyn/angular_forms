import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { NgClass, NgIf } from '@angular/common';
import { FormValidationDirective } from '../../../directives/form-validation.directive';
import { SuccessFieldIconComponent } from '../../../shared/success-field-icon/success-field-icon.component';
import { ageValidator } from '../../../validations/dateOfBirthValidator';

@Component({
  selector: 'app-select-gender',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf,
    NgClass,
    FormValidationDirective,

    SuccessFieldIconComponent,
    ErrorMessageComponent,
  ],
  templateUrl: './select-gender.component.html',
  styleUrl: './select-gender.component.css',
})
export class SelectGenderComponent {
  @Input() formGroup!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.formGroup.addControl(
      'genderInfo',
      this.fb.group({
        gender: ['Male'],
        dateOfBirth: ['', [Validators.required, ageValidator(16)]],
      })
    );
  }

  get formGroupControl() {
    return this.formGroup.controls['genderInfo'] as FormGroup;
  }
}
