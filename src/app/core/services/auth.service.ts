import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { Sesion } from '../../models/sesion';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { modificarSesion } from 'src/app/state/actions/auth.action';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  sesionSubject!: BehaviorSubject<Sesion>
  private api: string = environment.api

  constructor(

    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>

  ) {

    const sesion: Sesion = {
      sesionActiva: false,
      error: ''
    }

    this.sesionSubject = new BehaviorSubject(sesion)

  }

  iniciarSesion(usuario: Usuario) {

    this.http.get<Usuario[]>(this.api + 'usuarios').pipe(

      map((usuarios: Usuario[]) => {

        return new Promise((res, rej) => {

          const usuariodb: any = usuarios.find((u: Usuario) => u.usuario == usuario.usuario)

          if (!usuariodb) rej('Usuario no existe')

          if (usuariodb.contrasenia === usuario.contrasenia) res(usuariodb)

          rej('Contraseña inválida')

        })

      })

    ).subscribe(promise => {

      promise.then((res: any) => {

        const sesion: Sesion = {
          sesionActiva: true,
          error: '',
          usuario: res
        }

        this.sesionSubject.next(sesion)

        this.store.dispatch(modificarSesion({ sesion }))

        this.router.navigate(['alumnos'])

      }).catch(error => {

        const sesion: Sesion = {
          sesionActiva: false,
          error,
          usuario: undefined
        }

        this.store.dispatch(modificarSesion({ sesion }))
        
      })

    })
  }

  cerrarSesion() {
    const sesion: Sesion = {
      sesionActiva: false
    }

    this.sesionSubject.next(sesion)
  }

  obtenerSesion() {
    return this.sesionSubject.asObservable()
  }

  estaLoggeado() {
    return this.sesionSubject.value.sesionActiva
  }

}