import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { CurrentStepService } from '../../services/current-step.service';

import { AuthImgComponent } from '../../components/auth-components/auth-img/auth-img.component';
import { FormComponent } from '../../components/auth-components/form/form.component';
import { TitleComponent } from '../../components/auth-components/title/title.component';
import { SubtitleComponent } from '../../components/auth-components/subtitle/subtitle.component';
import { SubtitleLinkComponent } from '../../components/auth-components/subtitle-link/subtitle-link.component';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    AuthImgComponent,
    SubtitleLinkComponent,
    TitleComponent,
    SubtitleComponent,
    FormComponent,

    CommonModule,
    NgIf,
    RouterLink,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  private currentStepService = inject(CurrentStepService);

  totalSteps: number = 5;
  currentStep: number = 1;

  constructor() {
    this.currentStepService.currentStep
      .pipe(takeUntilDestroyed())
      .subscribe((currentNumber) => {
        this.currentStep = currentNumber;
      });
  }
}
