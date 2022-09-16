import { Injectable } from '@angular/core'
import { Usuario } from 'src/app/models/usuario'
import { BehaviorSubject } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private usuarioSubject!: BehaviorSubject<Usuario[]>
  private api: string = environment.api + 'usuarios/'

  constructor(

    private http: HttpClient

  ) {

    this.usuarioSubject = new BehaviorSubject<Usuario[]>([])
    
  }

  private consultarUsuarios() {
    this.http.get<Usuario[]>(this.api).subscribe(usuarios => {
      this.usuarioSubject.next(usuarios)
    })
  }

  obtenerUsuarios() {
    this.consultarUsuarios()
    return this.usuarioSubject.asObservable()
  }

  nuevoUsuario(usuario: Usuario) {
    this.http.post<Usuario>(this.api, usuario).subscribe(() =>
      this.consultarUsuarios()
    )
  }

  modificarAlumno(usuario: Usuario) {
    this.http.put<Usuario>(this.api + usuario.id, usuario).subscribe(() =>
      this.consultarUsuarios()
    )
  }

  eliminarUsuario(id: string) {
    this.http.delete<Usuario>(this.api + id).subscribe(() =>
      this.consultarUsuarios()
    )
  }

  detalleUsuario(id: string) {
    this.http.get<Usuario[]>(this.api, {params: {id}}).subscribe(usuarios => {
      this.usuarioSubject.next(usuarios)
    })
  }

}