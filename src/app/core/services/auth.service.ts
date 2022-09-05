import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { Sesion } from '../../models/sesion';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  sesionSubject!: BehaviorSubject<Sesion>
  private api: string = environment.api

  constructor(

    private http: HttpClient

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

          if (usuariodb.contrasenia === usuario.contrasenia) res(usuario)

          rej('Contraseña inválida')

        })

      })

    ).subscribe(promise => {

      promise.then((res: any) => {

        const sesion: Sesion = {
          sesionActiva: true,
          usuario: res
        }

        this.sesionSubject.next(sesion)

      }).catch(error => {
        alert(error)
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