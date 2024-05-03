import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from '../error-message/error-message.component';

@Component({
  selector: 'app-body-parameters',
  standalone: true,
  imports: [ReactiveFormsModule, NgClass, ErrorMessageComponent],
  templateUrl: './body-parameters.component.html',
  styleUrl: './body-parameters.component.css',
})
export class BodyParametersComponent {
  @Input() formGroup!: FormGroup;

  isInvalid(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return (control?.invalid && (control?.dirty || control?.touched)) || false;
  }

  isValid(controlName: string): boolean {
    const control = this.formGroup.get(controlName);
    return (control?.valid && (control.dirty || control.touched)) || false;
  }
}
