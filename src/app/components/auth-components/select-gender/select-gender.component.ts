import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { NgClass, NgIf } from '@angular/common';
import { FormValidationDirective } from '../../../directives/form-validation.directive';
import { SuccessFieldIconComponent } from '../../../shared/success-field-icon/success-field-icon.component';

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
}
