import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatTableDataSource, MatTable } from '@angular/material/table'
import { Subscription, Observable, map } from 'rxjs'
import { Usuario } from '../models/usuario'
import { BorrarDialogComponent } from '../shared/components'
import { ModificarUsuarioComponent, NuevoUsuarioComponent } from './components'
import { UsuarioService } from './services/usuario.service'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit, OnDestroy {

  public loading: boolean = true
  public usuarios: any = []
  public columnas: string[] = ['id', 'usuario', 'admin', 'contrasenia', 'email', 'acciones']
  public dataSource: MatTableDataSource<any> = new MatTableDataSource()
  public usuarioSubscripcion: Subscription
  public usuario$: Observable<any>

  @ViewChild(MatTable) listaAlumnos!: MatTable<Usuario>

  constructor(

    private dialog: MatDialog,
    private usuarioServicio: UsuarioService,

  ) {

    this.usuario$ = this.usuarioServicio.obtenerUsuarios()

    this.usuarioSubscripcion = this.usuario$.pipe(

      map((usuarios: Usuario[]) => usuarios)

    ).subscribe(usuarios => {

      this.dataSource.data = usuarios
      this.loading = false

    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.usuarioSubscripcion.unsubscribe()
  }

  editar(elemento: Usuario) {
    const dialogRef = this.dialog.open(ModificarUsuarioComponent, {
      width: '50%',
      data: elemento
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.usuarioServicio.modificarAlumno(resultado)
    })
  }

  eliminar(idUsuario: string) {

    const dialogRef = this.dialog.open(BorrarDialogComponent, {
      width: '20%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.usuarioServicio.eliminarUsuario(idUsuario)
    })
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase()
  }

  nuevoUsuario() {
    const dialogRef = this.dialog.open(NuevoUsuarioComponent, {
      width: '50%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.usuarioServicio.nuevoUsuario(resultado)
    })
  }

}