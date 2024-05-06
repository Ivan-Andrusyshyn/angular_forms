import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { ErrorMessageComponent } from '../error-message/error-message.component';
import { FormValidationDirective } from '../../../directives/form-validation.directive';
import { SuccessFieldIconComponent } from '../../../shared/success-field-icon/success-field-icon.component';

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
}
