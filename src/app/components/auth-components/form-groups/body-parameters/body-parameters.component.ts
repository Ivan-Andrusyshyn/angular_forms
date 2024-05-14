import { NgClass, NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { ErrorMessageComponent } from '../../error-message/error-message.component';
import { FormValidationDirective } from '../../../../directives/form-validation.directive';
import { SuccessFieldIconComponent } from '../../../../shared/success-field-icon/success-field-icon.component';
import { numericValidator } from '../../../../validations/numericValidator';

@Component({
  selector: 'app-body-parameters',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgClass,
    NgIf,
    FormValidationDirective,
    ErrorMessageComponent,
    SuccessFieldIconComponent,
  ],
  templateUrl: './body-parameters.component.html',
  styleUrl: './body-parameters.component.css',
})
export class BodyParametersComponent {
  @Input() formGroup!: FormGroup;

  private fb = inject(FormBuilder);

  ngOnInit(): void {
    this.formGroup.addControl(
      'parametersInfo',
      this.fb.group({
        height: ['', [Validators.required, numericValidator()]],
        weight: ['', [Validators.required, numericValidator()]],
      })
    );
  }

  get formGroupControl() {
    return this.formGroup.controls['parametersInfo'] as FormGroup;
  }

  showError(control: string) {
    return (
      this.formGroupControl.get(control)?.touched &&
      this.formGroupControl.get(control)?.invalid &&
      this.formGroupControl.get(control)?.hasError('numeric')
    );
  }
}
