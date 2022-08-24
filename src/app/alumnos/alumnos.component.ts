import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ModificarAlumnoComponent } from './components/modificar-alumno/modificar-alumno.component';
import { NuevoAlumnoComponent } from './components/nuevo-alumno/nuevo-alumno.component';
import { AlumnosService } from './services/alumnos/alumnos.service';
import { Alumno } from 'src/app/shared/interfaces/alumno';
import { map, Observable, Subscription } from 'rxjs';
import { BorrarDialogComponent } from '../shared/components/borrar-dialog/borrar-dialog.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit, OnDestroy {

  public loading: boolean = true
  public alumnos: any = []
  public columnas: string[] = ['nombreCompleto', 'email', 'telefono', 'dni', 'pais', 'activo', 'acciones']
  public dataSource: MatTableDataSource<any> = new MatTableDataSource()
  public alumnoSubscripcion: Subscription
  public alumno$: Observable<any>

  @ViewChild(MatTable) listaAlumnos!: MatTable<Alumno>

  constructor(

    private dialog: MatDialog,
    private alumnoServicio: AlumnosService

  ) {

    this.alumno$ = this.alumnoServicio.obtenerObservableAlumnos()

    this.alumnoSubscripcion = this.alumno$.pipe(

      map((alumnos: Alumno[]) => alumnos.filter((alumno: any) => alumno.id !== 1))

    ).subscribe(alumno => {
    
      this.dataSource.data = alumno
      this.loading = false

    })

  }

  ngOnInit(): void {
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
      if (resultado) {
        const item = this.dataSource.data.find(alumno => alumno.id === resultado.id)
        const index = this.dataSource.data.indexOf(item!)
        this.dataSource.data[index] = resultado
        this.listaAlumnos.renderRows()
      }
    })
  }

  eliminar(idAlumno: number) {
    const dialogRef = this.dialog.open(BorrarDialogComponent, {
      width: '20%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.dataSource.data = this.dataSource.data.filter((alumno: Alumno) => alumno.id !== idAlumno)
      }
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
      if (resultado) {
        this.dataSource.data.push({ ...resultado, id: this.dataSource.data.length + 1 })
        this.listaAlumnos.renderRows()
      }
    })
  }

}
