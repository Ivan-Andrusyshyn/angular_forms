import { Directive, Input, HostBinding } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({ standalone: true, selector: '[appFormValidation]' })
export class FormValidationDirective {
  @Input('formGroup') formGroup!: FormGroup;
  @Input('controlName') controlName!: string;

  @HostBinding('class.invalid-input') get isInvalid() {
    const control = this.formGroup.get(this.controlName);
    return control?.invalid && (control?.dirty || control?.touched);
  }

  @HostBinding('class.valid-input') get isValid() {
    const control = this.formGroup.get(this.controlName);
    return control?.valid && (control.dirty || control.touched);
  }
}
