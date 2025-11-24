import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated = signal(!!localStorage.getItem('isAuth'));

  login() {
    this.isAuthenticated.set(true)
    localStorage.setItem('isAuth', 'true')
  }

  logout() {
    this.isAuthenticated.set(false)
    localStorage.removeItem('isAuth')
  }
}
