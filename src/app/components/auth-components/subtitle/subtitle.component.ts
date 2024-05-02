import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subtitle',
  standalone: true,
  imports: [],
  templateUrl: './subtitle.component.html',
  styleUrl: './subtitle.component.css',
})
export class SubtitleComponent {
  @Input() currentStep: number = 1;

  getSubtitleByStep(): string {
    switch (this.currentStep) {
      case 1:
        return 'You need to register to use the service';
      case 2:
        return 'Choose a goal so that we can help you effectively';
      case 3:
        return 'Choose a goal so that we can help you effectively';
      case 4:
        return 'Enter your parameters for correct performance tracking';
      case 5:
        return 'To correctly calculate calorie and water intake';
      default:
        return 'You need to register to use the service';
    }
  }
}
