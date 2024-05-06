import { AbstractControl, ValidatorFn } from '@angular/forms';

export function ageValidator(minAge: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = Number(control.value);

    if (isNaN(value) || value < minAge) {
      return { invalidAge: true };
    }

    return null;
  };
}
