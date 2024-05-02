import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputGroupComponent } from '../../components/auth-components/input-group/input-group.component';
import { AuthImgComponent } from '../../components/auth-components/auth-img/auth-img.component';
import { SubtitleLinkComponent } from '../../components/auth-components/subtitle-link/subtitle-link.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputGroupComponent,
    SubtitleLinkComponent,
    ReactiveFormsModule,
    AuthImgComponent,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  onSignIn() {
    console.log(this.signInForm.value);
  }
}
