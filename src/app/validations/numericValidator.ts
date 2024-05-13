import { AbstractControl, ValidatorFn } from '@angular/forms';

export function numericValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value = control.value;
    if (isNaN(value)) {
      return { numeric: true };
    }
    return null;
  };
}
