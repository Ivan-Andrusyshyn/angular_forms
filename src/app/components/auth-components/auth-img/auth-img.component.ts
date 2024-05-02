import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-auth-img',
  standalone: true,
  imports: [],
  templateUrl: './auth-img.component.html',
  styleUrl: './auth-img.component.css',
})
export class AuthImgComponent {
  @Input() currentStep: number = 1;
  BASE_SRC: string = '../../../assets/images/authImages';

  getImageUrl(): string {
    switch (this.currentStep) {
      case 1:
        return `${this.BASE_SRC}/Illustration.png`;
      case 2:
        return `${this.BASE_SRC}/goals.png`;
      case 3:
        return `${this.BASE_SRC}/genderAndAge.png`;
      case 4:
        return `${this.BASE_SRC}/bodyParameters.png`;
      case 5:
        return `${this.BASE_SRC}/illustrationActivity.png`;
      default:
        return `${this.BASE_SRC}/Illustration.png`;
    }
  }
}
