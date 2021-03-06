import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';

@Injectable()
export class AuthguardGuard implements CanActivate {
  constructor(private userservice:UserService)
  {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.userservice.getUSerLoggedIn();
  }
}
