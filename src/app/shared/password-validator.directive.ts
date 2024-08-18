import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

//todo should this live here? mayve move it back to login-page
// or check if its called something different if not real directive
export function validatePassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;

    const isValid = passwordRegex.test(value);

    return !isValid ? { passwordPattern: true } : null;
  };
}
