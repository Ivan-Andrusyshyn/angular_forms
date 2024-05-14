import { NgSwitch, NgSwitchCase } from '@angular/common';
import { Component, Input } from '@angular/core';

import { YourActivityComponent } from '../form-groups/your-activity/your-activity.component';
import { BodyParametersComponent } from '../form-groups/body-parameters/body-parameters.component';
import { YourGoalComponent } from '../form-groups/your-goal/your-goal.component';
import { InputGroupComponent } from '../form-groups/input-group/input-group.component';
import { SelectGenderComponent } from '../form-groups/select-gender/select-gender.component';
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

    NgSwitchCase,
    NgSwitch,
  ],
  templateUrl: './form-elements.component.html',
  styleUrl: './form-elements.component.css',
})
export class FormElementsComponent {
  @Input() signUpForm!: FormGroup;
  @Input() currentStep: number = 1;
  constructor() {}
}
