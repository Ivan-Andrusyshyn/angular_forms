import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-group',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './input-group.component.html',
  styleUrl: './input-group.component.css',
})
export class InputGroupComponent {
  @Input() pageIs: 'SignUp' | 'SignIn' = 'SignUp';
  @Input() formGroup: any;

  onSignIn() {}
}
