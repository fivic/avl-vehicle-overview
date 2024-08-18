import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, delay, of, tap } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    const isLoggedIn =
      this.localStorageService.getItem(this.loggedInKey) === 'true';
    this.isLoggedInSubject = new BehaviorSubject<boolean>(isLoggedIn);
  }
  private readonly loggedInKey = 'loggedIn';
  private isLoggedInSubject: BehaviorSubject<boolean>;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.localStorageService.setItem(this.loggedInKey, 'true');
        this.isLoggedInSubject.next(true);
      })
    );
  }

  getIsLoggedIn(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  logout(): void {
    this.localStorageService.removeItem(this.loggedInKey);
    this.isLoggedInSubject.next(false);

    this.router.navigate(['/']);
  }
}
