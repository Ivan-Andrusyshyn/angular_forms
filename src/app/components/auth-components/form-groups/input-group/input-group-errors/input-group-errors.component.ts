import { NgClass, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ErrorMessageComponent } from '../../../error-message/error-message.component';

@Component({
  selector: 'app-input-group-errors',
  standalone: true,
  imports: [NgIf, NgClass, ErrorMessageComponent],
  templateUrl: './input-group-errors.component.html',
  styleUrl: './input-group-errors.component.css',
})
export class InputGroupErrorsComponent {
  @Input() formGroupControl!: FormGroup;
  @Input() pageIs: string = '';

  get passwordControl() {
    return this.formGroupControl.get('password');
  }

  isInvalid(controlName: string): boolean {
    const control = this.formGroupControl.get(controlName);

    return (control?.invalid && control?.dirty) || control?.touched || false;
  }
  changeClassByPage(): string {
    if (this.pageIs === 'SignUp') {
      return 'error-wrapper-signup';
    } else {
      return 'error-wrapper-signin';
    }
  }
}
