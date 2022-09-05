import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clase } from 'src/app/models/clase';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ClaseService {

  private api: string = environment.api + 'clases/'

  constructor(
    private http: HttpClient
  ) { }

  obtenerClases(): Observable<Clase[]> {
    return this.http.get<Clase[]>(this.api)
  }

  nuevoClase(clase: Clase) {
    return this.http.post<Clase>(this.api, clase)
  }

  modificarClase(clase: Clase) {
    console.log(clase)
    return this.http.put<Clase>(this.api + clase.id, clase)
  }

  eliminarClase(id: string) {
    return this.http.delete<Clase>(this.api + id)
  }

}