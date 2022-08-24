import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
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

  cursosSubject: Subject<any> = new Subject()

  constructor(
  ) {
    this.obtenerAlumnos().then((res) => {
      this.cursosSubject.next(res)
    })
  }

  obtenerAlumnos() {
    console.log('obteniendo alumnos');
    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (LISTA_CURSOS.length > 0) {
          resolve(LISTA_CURSOS)
        }
        reject(
          {
            id: 400,
            message: 'No se han encontrado alumnos'
          }
        )
      }, 2000)
    })
  }

  obtenerObservableAlumnos() {
    return this.cursosSubject.asObservable()
  }

}
