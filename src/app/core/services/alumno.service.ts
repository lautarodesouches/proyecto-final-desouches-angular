import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from 'src/app/models/alumno';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AlumnoService {

  private api: string = environment.api + 'alumnos/'

  constructor(
    private http: HttpClient
  ) { }

  obtenerAlumnos(): Observable<Alumno[]> {
    return this.http.get<Alumno[]>(this.api)
  }

  nuevoAlumno(alumno: Alumno) {
    return this.http.post<Alumno>(this.api, alumno)
  }

  modificarAlumno(alumno: Alumno) {
    console.log(alumno)
    return this.http.put<Alumno>(this.api + alumno.id, alumno)
  }

  eliminarAlumno(id: string) {
    return this.http.delete<Alumno>(this.api + id)
  }

}