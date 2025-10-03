import {Component, inject} from '@angular/core';
import {AuthService} from '../auth-service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {

  authService: AuthService = inject(AuthService);

  message: string = "";

  refresh() {
    if (this.authService.isAuthenticated()) {
      this.message = this.authService.authUser?.email || "";
    }
  }
}
