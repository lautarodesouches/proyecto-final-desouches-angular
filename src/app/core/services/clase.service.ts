import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Clase } from 'src/app/models/clase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClaseService {

  private alumnoSubject!: BehaviorSubject<Clase[]>
  private api: string = environment.api + 'clases/'

  constructor(
    private http: HttpClient
  ) {
    this.alumnoSubject = new BehaviorSubject<Clase[]>([])
  }

  private consultarClases() {
    this.http.get<Clase[]>(this.api).subscribe(clases => {
      this.alumnoSubject.next(clases)
    })
  }

  obtenerClases() {
    this.consultarClases()
    return this.alumnoSubject.asObservable()
  }

  nuevaClase(clase: Clase) {
    this.http.post<Clase>(this.api, clase).subscribe(() =>
      this.consultarClases()
    )
  }

  modificarClase(clase: Clase) {
    this.http.put<Clase>(this.api + clase.id, clase).subscribe(() =>
      this.consultarClases()
    )
  }

  eliminarClase(id: string) {
    this.http.delete<Clase>(this.api + id).subscribe(() =>
      this.consultarClases()
    )
  }

}