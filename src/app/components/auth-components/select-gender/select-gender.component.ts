import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-select-gender',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgClass, ErrorMessageComponent],
  templateUrl: './select-gender.component.html',
  styleUrl: './select-gender.component.css',
})
export class SelectGenderComponent {
  @Input() formGroup!: FormGroup;

  isInvalid(controlName: string): boolean {
    const control = this.formGroup.get(controlName);

    return (control?.invalid && (control?.dirty || control?.touched)) || false;
  }

  hasError(controlName: string, errorName: string): boolean {
    const control = this.formGroup.get(controlName);
    return control?.hasError(errorName) || false;
  }

  isValid(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return (control?.valid && (control.dirty || control.touched)) || false;
  }
}
