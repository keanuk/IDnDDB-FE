import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  verify = false;

  constructor(private user: UserService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      this.user.verifyLogin((data) => {
        console.log(data);
        if(data.str === "You're guccini") {
          this.router.navigate(["home"]);
          this.verify = true;
        }
        else {
          this.router.navigate(["login"]);
        }
      });
      return this.verify;
    }
}
