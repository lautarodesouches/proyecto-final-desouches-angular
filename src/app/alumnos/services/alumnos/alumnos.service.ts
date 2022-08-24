import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Alumno } from 'src/app/shared/interfaces/alumno';

const LISTA_ALUMNOS: Alumno[] = [
  { id: 1, nombre: 'Cristian', apellido: 'Amador', email: 'cristian@email.com', telefono: 5497002343155, dni: 20860655, pais: 'AR', activo: true },
  { id: 2, nombre: 'Timoteo', apellido: 'Bayona', email: 'timoteo@email.com', telefono: 5498089779700, dni: 34065191, pais: 'AR', activo: false },
  { id: 3, nombre: 'Ester', apellido: 'Rios', email: 'ester@email.com', telefono: 5761457236682, dni: 87441870, pais: 'CO', activo: true },
  { id: 4, nombre: 'Sigfrido', apellido: 'Gallart', email: 'sigfrido@email.com', telefono: 5494542679638, dni: 82472366, pais: 'AR', activo: true },
  { id: 5, nombre: 'Camila', apellido: 'Hidalgo', email: 'camila@email.com', telefono: 5985982346426, dni: 75810926, pais: 'UR', activo: true },
  { id: 6, nombre: 'Haroldo', apellido: 'Campos', email: 'haroldo@email.com', telefono: 5491428132549, dni: 22983104, pais: 'AR', activo: true },
  { id: 7, nombre: 'Lorena', apellido: 'Hernandez', email: 'lorena@email.com', telefono: 5710984430382, dni: 85902663, pais: 'CO', activo: false },
  { id: 8, nombre: 'Natalia', apellido: 'Batalla', email: 'natalia@email.com', telefono: 5650388923792, dni: 80062954, pais: 'CL', activo: true },
  { id: 9, nombre: 'Jose', apellido: 'Clavero', email: 'jose@email.com', telefono: 5491877131249, dni: 87124785, pais: 'AR', activo: true },
  { id: 10, nombre: 'Francisco', apellido: 'León', email: 'francisco@email.com', telefono: 5692457848113, dni: 57294097, pais: 'CL', activo: true }
]

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  alumnoSubject: Subject<any> = new Subject()

  constructor(
  ) {
    this.obtenerAlumnos().then((res) => {
      this.alumnoSubject.next(res)
    })
  }

  obtenerAlumnos() {    
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (LISTA_ALUMNOS.length > 0) {
          resolve(LISTA_ALUMNOS)
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
    return this.alumnoSubject.asObservable()
  }

}
