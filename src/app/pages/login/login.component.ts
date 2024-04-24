import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputGroupComponent } from '../../components/input-group/input-group.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [InputGroupComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  onSignIn() {
    console.log(this.signInForm.value);
  }
}
