import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ModificarClasesComponent } from './components/modificar-clases/modificar-clases.component';
import { NuevaClaseComponent } from './components/nueva-clase/nueva-clasecomponent';
import { ClasesService } from './services/clases/clases.service';
import { Clase } from 'src/app/shared/interfaces/clase';
import { map, Observable, Subscription } from 'rxjs';
import { BorrarDialogComponent } from '../shared/components/borrar-dialog/borrar-dialog.component';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit, OnDestroy {

  public loading: boolean = true
  public clases: any = []
  public columnas: string[] = ['id', 'nombre', 'curso', 'acciones']
  public dataSource: MatTableDataSource<any> = new MatTableDataSource()
  public claseSubscripcion: Subscription
  public clase$: Observable<any>

  @ViewChild(MatTable) listaClases!: MatTable<Clase>

  constructor(

    private dialog: MatDialog,
    private clasesServicio: ClasesService

  ) {

    this.clase$ = this.clasesServicio.obtenerObservableClases()

    this.claseSubscripcion = this.clase$.pipe(

      map((clases: Clase[]) => clases.filter((clase: any) => clase.id !== 1))

    ).subscribe(clase => {

      this.dataSource.data = clase
      this.loading = false

    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.claseSubscripcion.unsubscribe()
  }

  editar(elemento: Clase) {
    const dialogRef = this.dialog.open(ModificarClasesComponent, {
      width: '50%',
      data: elemento
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        const item = this.dataSource.data.find(clase => clase.id === resultado.id)
        const index = this.dataSource.data.indexOf(item!)
        this.dataSource.data[index] = resultado
        this.listaClases.renderRows()
      }
    })
  }

  eliminar(idAlumno: number) {
    const dialogRef = this.dialog.open(BorrarDialogComponent, {
      width: '20%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.dataSource.data = this.dataSource.data.filter((clase: Clase) => clase.id !== idAlumno)
      }
    })
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase()
  }

  nuevoAlumno() {
    const dialogRef = this.dialog.open(NuevaClaseComponent, {
      width: '50%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) {
        this.dataSource.data.push({ ...resultado, id: this.dataSource.data.length + 1 })
        this.listaClases.renderRows()
      }
    })
  }

}
