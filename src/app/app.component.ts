import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'VehicleOverviewApp';
  constructor(private authService: AuthService) {}

  isLoggedIn$ = this.authService.getIsLoggedIn();

  logout() {
    this.authService.logout();
  }
}
