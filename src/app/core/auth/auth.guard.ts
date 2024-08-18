import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';

export const overviewGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getIsLoggedIn().pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return true;
      } else {
        return router.parseUrl('/');
      }
    })
  );
};

export const loginGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getIsLoggedIn().pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        return router.navigate(['overview']);
      } else {
        return true;
      }
    })
  );
};
