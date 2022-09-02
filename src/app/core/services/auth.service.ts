import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { Sesion } from '../../models/sesion';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sesionSubject!: BehaviorSubject<Sesion>

  constructor() {
    const sesion: Sesion = {
      sesionActiva: false
    }

    this.sesionSubject = new BehaviorSubject(sesion)
    this.sesionSubject
  }

  iniciarSesion(usuario: Usuario) {
    const sesion: Sesion = {
      sesionActiva: true,
      usuario
    }

    this.sesionSubject.next(sesion)
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

}