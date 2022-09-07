import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as Toastify from 'toastify-js';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(

    private auth: AuthService,
    private router: Router
    
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.estaLoggeado()) {

      Toastify({
        text: 'No estas logueado',
        duration: 3000,
        style: {
          background: "linear-gradient(to right, #e60000, #cc0000)",
          color: 'white'
        },
        stopOnFocus: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
      }).showToast();

      return this.router.navigate(['auth']).then(() => false)

    }
    return true;
  }

}