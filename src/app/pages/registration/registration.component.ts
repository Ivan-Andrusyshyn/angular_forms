import { Component, inject } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { CurrentStepService } from '../../services/current-step.service';

import { FormComponent } from '../../components/auth-components/form/form.component';
import { TitleComponent } from '../../components/auth-components/title/title.component';
import { SubtitleComponent } from '../../components/auth-components/subtitle/subtitle.component';
import { SubtitleLinkComponent } from '../../components/auth-components/subtitle-link/subtitle-link.component';
import { SignupImgComponent } from '../../components/auth-components/signup-img/signup-img.component';
import { stepTitles } from './stepTitlesArray';
import { stepSubtitles } from './stepSubtitlesArray';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    SubtitleLinkComponent,
    TitleComponent,
    SubtitleComponent,
    FormComponent,
    SignupImgComponent,

    CommonModule,
    NgIf,
    RouterLink,
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css',
})
export class RegistrationComponent {
  private currentStepService = inject(CurrentStepService);

  currentStep: number = 1;
  pageTitle: string = '';
  pageSubtitle: string = '';

  constructor() {
    this.currentStepService.currentStep$
      .pipe(takeUntilDestroyed())
      .subscribe((currentNumber: number) => {
        this.currentStep = currentNumber;
        this.pageTitle = stepTitles[this.currentStep - 1];
        this.pageSubtitle = stepSubtitles[this.currentStep - 1];
      });
  }
}
