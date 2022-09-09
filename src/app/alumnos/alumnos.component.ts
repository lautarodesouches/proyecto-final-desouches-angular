import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ModificarAlumnoComponent } from './components/modificar-alumno/modificar-alumno.component';
import { NuevoAlumnoComponent } from './components/nuevo-alumno/nuevo-alumno.component';
import { map, Observable, Subscription } from 'rxjs';
import { BorrarDialogComponent } from '../shared/components/borrar-dialog/borrar-dialog.component';
import { Alumno } from '../models/alumno';
import { AlumnoService } from './services/alumno.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { obtenerSesion } from '../state/actions/auth.action';
import { selectorAuth, selectorObtenerSesion } from '../state/selectors/auth.selector';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})

export class AlumnosComponent implements OnInit, OnDestroy {

  public esAdmin: boolean = false
  public loading: boolean = true
  public alumnos: any = []
  public columnas: string[] = ['nombreCompleto', 'email', 'telefono', 'dni', 'pais', 'activo', 'acciones']
  public dataSource: MatTableDataSource<any> = new MatTableDataSource()
  public alumnoSubscripcion: Subscription
  public alumno$: Observable<any>

  @ViewChild(MatTable) listaAlumnos!: MatTable<Alumno>

  constructor(

    private store: Store<AppState>,
    private dialog: MatDialog,
    private alumnoServicio: AlumnoService,
    private router: Router

  ) {

    this.store.select(selectorObtenerSesion).subscribe(e => {
      this.esAdmin = e.usuario?.admin || false
    })

    this.alumno$ = this.alumnoServicio.obtenerAlumnos()

    this.alumnoSubscripcion = this.alumno$.pipe(

      map((alumnos: Alumno[]) => alumnos.filter((alumno: any) => alumno.id !== '1'))

    ).subscribe(alumno => {

      this.dataSource.data = alumno
      this.loading = false

    })

  }

  ngOnInit(): void {
    this.store.dispatch(obtenerSesion())
  }

  ngOnDestroy(): void {
    this.alumnoSubscripcion.unsubscribe()
  }

  editar(elemento: Alumno) {
    const dialogRef = this.dialog.open(ModificarAlumnoComponent, {
      width: '50%',
      data: elemento
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.alumnoServicio.modificarAlumno(resultado)
    })
  }

  eliminar(idAlumno: string) {

    const dialogRef = this.dialog.open(BorrarDialogComponent, {
      width: '20%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.alumnoServicio.eliminarAlumno(idAlumno)
    })
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase()
  }

  nuevoAlumno() {
    const dialogRef = this.dialog.open(NuevoAlumnoComponent, {
      width: '50%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.alumnoServicio.nuevoAlumno(resultado)
    })
  }

  detalle(alumno: Alumno) {
    this.router.navigate(['alumnos/detalle', alumno.id])
  }

}