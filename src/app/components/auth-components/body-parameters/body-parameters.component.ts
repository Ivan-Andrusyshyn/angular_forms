import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-body-parameters',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './body-parameters.component.html',
  styleUrl: './body-parameters.component.css',
})
export class BodyParametersComponent {
  @Input() formGroup!: FormGroup;
}
