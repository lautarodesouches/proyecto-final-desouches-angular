import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CursoService {

  private alumnoSubject!: BehaviorSubject<Curso[]>
  private api: string = environment.api + 'cursos/'

  constructor(
    private http: HttpClient
  ) {
    this.alumnoSubject = new BehaviorSubject<Curso[]>([])
  }

  private consultarCursos() {
    this.http.get<Curso[]>(this.api).subscribe(cursos => {
      this.alumnoSubject.next(cursos)
    })
  }

  obtenerCursos() {
    this.consultarCursos()
    return this.alumnoSubject.asObservable()
  }

  nuevoCurso(curso: Curso) {
    this.http.post<Curso>(this.api, curso).subscribe(() =>
      this.consultarCursos()
    )
  }

  modificarCurso(curso: Curso) {
    this.http.put<Curso>(this.api + curso.id, curso).subscribe(() =>
      this.consultarCursos()
    )
  }

  eliminarCurso(id: string) {
    this.http.delete<Curso>(this.api + id).subscribe(() =>
      this.consultarCursos()
    )
  }

}