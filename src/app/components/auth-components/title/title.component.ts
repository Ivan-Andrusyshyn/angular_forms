import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input() currentStep: number = 1;

  getTitleByStep(): string {
    switch (this.currentStep) {
      case 1:
        return 'Sign up';
      case 2:
        return 'Your goal';
      case 3:
        return 'Select gender, Age';
      case 4:
        return 'Body parameters';
      case 5:
        return 'Your Activity';
      default:
        return 'Sign up';
    }
  }
}
