import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService {

  private alumnoSubject!: BehaviorSubject<Alumno[]>
  private api: string = environment.api + 'alumnos/'

  constructor(
    private http: HttpClient
  ) {
    this.alumnoSubject = new BehaviorSubject<Alumno[]>([])
  }

  private consultarAlumnos() {
    this.http.get<Alumno[]>(this.api).subscribe(alumnos => {
      this.alumnoSubject.next(alumnos)
    })
  }

  obtenerAlumnos() {
    this.consultarAlumnos()
    return this.alumnoSubject.asObservable()
  }

  nuevoAlumno(alumno: Alumno) {
    this.http.post<Alumno>(this.api, alumno).subscribe(() =>
      this.consultarAlumnos()
    )
  }

  modificarAlumno(alumno: Alumno) {
    this.http.put<Alumno>(this.api + alumno.id, alumno).subscribe(() =>
      this.consultarAlumnos()
    )
  }

  eliminarAlumno(id: string) {
    this.http.delete<Alumno>(this.api + id).subscribe(() =>
      this.consultarAlumnos()
    )
  }

  detalleAlumno(id: string) {
    this.http.get<Alumno[]>(this.api, {params: {id}}).subscribe(alumnos => {
      this.alumnoSubject.next(alumnos)
    })
  }

}