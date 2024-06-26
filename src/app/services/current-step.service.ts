import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CurrentStepService {
  currentStep$: BehaviorSubject<number> = new BehaviorSubject<number>(1);

  constructor() {}

  onBack() {
    if (this.currentStep$.getValue() > 1) {
      this.currentStep$.next(this.currentStep$.getValue() - 1);
    }
  }

  onNextStep() {
    this.currentStep$.next(this.currentStep$.getValue() + 1);
  }

  resetCurrentStep() {
    this.currentStep$.next(1);
  }
}
