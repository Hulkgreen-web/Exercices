import {Injectable} from '@angular/core';
import {AuthenticatedUser} from './authenticated-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authUser: AuthenticatedUser | null = null;

  login(email: string, password: string) {
    this._authUser = {email: email};
  }

  isAuthenticated(): boolean {
    return !!this._authUser;
  }

  get authUser(): AuthenticatedUser | null {
    if (this._authUser) {
      return JSON.parse(JSON.stringify(this._authUser));
    }
    return null;
  }

}
