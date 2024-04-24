import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignUpService } from '../../services/sign-up.service';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { FormDataService } from '../../services/form-data.service';
import { NgIf } from '@angular/common';
import { InputGroupComponent } from '../../components/input-group/input-group.component';
import { YourGoalComponent } from '../../components/your-goal/your-goal.component';
import { SelectGenderComponent } from '../../components/select-gender/select-gender.component';
import { YourActivityComponent } from '../../components/your-activity/your-activity.component';
import { BodyParametersComponent } from '../../components/body-parameters/body-parameters.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    SelectGenderComponent,
    InputGroupComponent,
    YourGoalComponent,
    BodyParametersComponent,
    YourActivityComponent,
    NgIf,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  private fb = inject(FormBuilder);
  signUpService = inject(SignUpService);
  formDataService = inject(FormDataService);

  signUpForm = this.fb.group({
    personalInfo: this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    }),
    goalInfo: this.fb.group({
      goal: [''],
    }),
    genderInfo: this.fb.group({
      gender: [''],
      dateOfBirth: [''],
    }),
    parametersInfo: this.fb.group({
      height: [''],
      weight: [''],
    }),
    activityInfo: this.fb.group({
      activity: [''],
    }),
  });

  onSignUp() {
    console.log(this.signUpForm.value);

    if (this.signUpForm.valid) {
      this.formDataService.setFormData(this.signUpForm.value);
      this.signUpService.goToNextStep();
    }
  }
}
