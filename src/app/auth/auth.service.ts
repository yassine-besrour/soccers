import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn : boolean = false;
  redirecUrl: string;

  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'yassine') {
      this.isLoggedIn=true;
      return of(true);
    }      
    return of(false);
  }
  logout() {
    this.isLoggedIn = false;
  }
}
