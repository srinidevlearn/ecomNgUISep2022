import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class JwtService {
  public tokenPayload: any = null;

  constructor() {
    this.parseToken();
  }

  parseToken() {
    let token: any = localStorage.getItem('auth');
    this.tokenPayload = new JwtHelperService().decodeToken(token);
  }

  loadToStorage() {
    Promise.resolve(this.parseToken()).then(() =>
      localStorage.setItem('userInfo', JSON.stringify(this.tokenPayload))
    );
  }
}
