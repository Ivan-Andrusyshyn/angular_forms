import { NgIf } from '@angular/common';
import { Component, inject, Input } from '@angular/core';

import { YourActivityComponent } from '../your-activity/your-activity.component';
import { BodyParametersComponent } from '../body-parameters/body-parameters.component';
import { YourGoalComponent } from '../your-goal/your-goal.component';
import { InputGroupComponent } from '../input-group/input-group.component';
import { SelectGenderComponent } from '../select-gender/select-gender.component';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-elements',
  standalone: true,
  imports: [
    SelectGenderComponent,
    InputGroupComponent,
    YourGoalComponent,
    BodyParametersComponent,
    YourActivityComponent,

    NgIf,
  ],
  templateUrl: './form-elements.component.html',
  styleUrl: './form-elements.component.css',
})
export class FormElementsComponent {
  @Input() signUpForm!: FormGroup;
  @Input() currentStep: number = 1;
  constructor() {}
}
