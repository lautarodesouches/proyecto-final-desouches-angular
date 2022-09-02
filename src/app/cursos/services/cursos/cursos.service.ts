import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Curso } from 'src/app/shared/interfaces/curso';

const LISTA_CURSOS: Curso[] = [
  { comision: 514, nombre: 'Angular', profesor: 'Juan Delgado'},
  { comision: 654, nombre: 'ReactJS', profesor: 'Mateo Lopez'},
  { comision: 891, nombre: 'JS', profesor: 'Fernando Gonzalez'},
  { comision: 514, nombre: 'Angular', profesor: 'Andrea Fernandez'},
  { comision: 187, nombre: 'Vue', profesor: 'Josefina Rios'},
]

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursosSubject: ReplaySubject<any> = new ReplaySubject(1)

  constructor(
  ) {
    this.obtenerCursos().then((res) => {
      this.cursosSubject.next(res)
    })
  }

  obtenerCursos() {    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (LISTA_CURSOS.length > 0) {
          resolve(LISTA_CURSOS)
        }
        reject(
          {
            id: 400,
            message: 'No se han encontrado cursos'
          }
        )
      }, 2000)
    })
  }

  obtenerObservableCursos() {
    return this.cursosSubject.asObservable()
  }

}
