import { AbstractControl } from '@angular/forms';

export const dateOfBirthValidator = (
  control: AbstractControl
): { [key: string]: boolean } | null => {
  if (!control.value) {
    return null;
  }
  const dateOfBirth = new Date(control.value);

  const age = new Date().getFullYear() - dateOfBirth.getFullYear();

  if (age < 16) {
    return { underAge: true };
  }

  return null;
};
