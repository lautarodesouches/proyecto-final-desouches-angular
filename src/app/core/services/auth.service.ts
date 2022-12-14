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

  public sesionSubject!: BehaviorSubject<Sesion>
  private api: string = environment.api
  private sesion: Sesion = {
    sesionActiva: false,
    error: '',
    loading: false
  }

  constructor(

    private http: HttpClient,
    private router: Router,
    private store: Store<AppState>

  ) {

    const localSesion = localStorage.getItem('sesion')

    if (localSesion) this.sesion = JSON.parse(localSesion)

    this.sesionSubject = new BehaviorSubject(this.sesion)

  }

  guardarSesion() {
    localStorage.setItem('sesion', JSON.stringify(this.sesion))
    this.store.dispatch(modificarSesion({ sesion: this.sesion }))
  }

  iniciarSesion(usuario: Usuario) {

    this.sesion = {
      sesionActiva: false,
      loading: true
    }

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

        this.sesion = {
          sesionActiva: true,
          error: '',
          usuario: res,
          loading: false
        }

        this.sesionSubject.next(this.sesion)

        this.guardarSesion()

        this.router.navigate(['alumnos'])

      }).catch(error => {

        this.sesion = {
          sesionActiva: false,
          error,
          usuario: undefined,
          loading: false
        }

        this.guardarSesion()

      })

    })
  }

  cerrarSesion() {
    this.sesion = {
      sesionActiva: false,
      loading: false
    }

    this.sesionSubject.next(this.sesion)

    this.guardarSesion()
  }

  obtenerSesion() {
    return this.sesionSubject.asObservable()
  }

  estaLoggeado() {
    return this.sesionSubject.value.sesionActiva
  }

}