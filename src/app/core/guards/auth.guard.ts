import { Injectable } from '@angular/core'
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router'
import { Observable } from 'rxjs'
import { AppState } from '../../state/app.state'
import { Store } from '@ngrx/store'
import { selectorObtenerSesion } from '../../state/selectors/auth.selector'

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  private sesionActiva: boolean = false

  constructor(

    private store: Store<AppState>,
    private router: Router

  ) {

    this.store.select(selectorObtenerSesion).subscribe(e => {
      this.sesionActiva = e.sesionActiva
    })
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.sesionActiva) return this.router.navigate(['auth']).then(() => false)
    return true
  }

}