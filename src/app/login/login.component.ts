import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { validatePassword } from '../shared/password-validator.directive';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginPageComponent {
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  loading = false;

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', [Validators.required, validatePassword()]],
  });

  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  onSubmit() {
    this.loginForm.markAllAsTouched();

    if (this.loginForm.valid) {
      this.loading = true;
      this.authService.login().subscribe((v) => {
        if (v) {
          this.router.navigate(['overview']);
        }
      });
    } else {
      console.log('Form has errors!');
    }
  }
}
