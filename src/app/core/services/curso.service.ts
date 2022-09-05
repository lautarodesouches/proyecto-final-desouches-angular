import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class CursoService {

  private api: string = environment.api + 'cursos/'

  constructor(
    private http: HttpClient
  ) { }

  obtenerCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.api)
  }

  nuevoCurso(curso: Curso) {
    return this.http.post<Curso>(this.api, curso)
  }

  modificarCurso(curso: Curso) {
    console.log(curso)
    return this.http.put<Curso>(this.api + curso.id, curso)
  }

  eliminarCurso(id: string) {
    return this.http.delete<Curso>(this.api + id)
  }

}