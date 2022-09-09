import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ModificarCursoComponent } from './components/modificar-curso/modificar-curso.component';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';
import { Observable, Subscription } from 'rxjs';
import { BorrarDialogComponent } from '../shared/components/borrar-dialog/borrar-dialog.component';
import { Curso } from '../models/curso';
import { CursoService } from './services/curso.service';
import { AppState } from '../state/app.state';
import { Store } from '@ngrx/store';
import { selectorObtenerSesion } from '../state/selectors/auth.selector';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {

  public esAdmin: boolean = false
  public loading: boolean = true
  public cursos: any = []
  public columnas: string[] = ['comision', 'nombre', 'profesor']
  public dataSource: MatTableDataSource<any> = new MatTableDataSource()
  public cursoSubscripcion: Subscription
  public cursos$: Observable<any>

  @ViewChild(MatTable) listaCursos!: MatTable<Curso>

  constructor(

    private store: Store<AppState>,
    private dialog: MatDialog,
    private cursoServicio: CursoService,

  ) {

    this.store.select(selectorObtenerSesion).subscribe(e => {
      this.esAdmin = e.usuario?.admin || false
      this.esAdmin === true && this.columnas.push('acciones')
    })

    this.cursos$ = this.cursoServicio.obtenerCursos()

    this.cursoSubscripcion = this.cursos$.subscribe(curso => {

      this.dataSource.data = curso
      
      if (curso.length > 0) {
        this.loading = false
      } else {
        this.loading = true
      }

    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.cursoSubscripcion.unsubscribe()
  }

  editar(elemento: Curso) {
    const dialogRef = this.dialog.open(ModificarCursoComponent, {
      width: '50%',
      data: elemento
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.cursoServicio.modificarCurso(resultado)
    })
  }

  eliminar(idCurso: string) {
    const dialogRef = this.dialog.open(BorrarDialogComponent, {
      width: '20%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.cursoServicio.eliminarCurso(idCurso)
    })
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase()
  }

  nuevoAlumno() {
    const dialogRef = this.dialog.open(NuevoCursoComponent, {
      width: '50%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.cursoServicio.nuevoCurso(resultado)
    })
  }

}
