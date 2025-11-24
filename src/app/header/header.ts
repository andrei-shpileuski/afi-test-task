import {Component, inject} from '@angular/core';
import {AuthService} from '../services/auth-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  authService = inject(AuthService);

  isAuth = this.authService.isAuthenticated

  protected login() {
    this.authService.login();
  }

  protected logout() {
    this.authService.logout();
  }
}
