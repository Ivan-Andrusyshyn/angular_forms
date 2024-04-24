import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-select-gender',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './select-gender.component.html',
  styleUrl: './select-gender.component.css',
})
export class SelectGenderComponent {
  @Input() formGroup: any;
}
