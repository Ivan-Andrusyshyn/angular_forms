import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { InputGroupComponent } from '../../components/auth-components/form-groups/input-group/input-group.component';
import { SubtitleLinkComponent } from '../../components/auth-components/subtitle-link/subtitle-link.component';
import { SignupImgComponent } from '../../components/auth-components/signup-img/signup-img.component';
import { AuthService } from '../../services/auth.service';
import { ErrorMessageComponent } from '../../components/auth-components/error-message/error-message.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputGroupComponent,
    SignupImgComponent,
    SubtitleLinkComponent,
    ErrorMessageComponent,

    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private authService = inject(AuthService);

  pageImage = '../../../assets/images/authImages/Illustration.png';

  signInForm: FormGroup = this.fb.group({});

  onSignIn() {
    if (this.signInForm.invalid) return;
    this.authService.onSignIn();
  }
}
