import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ModificarClasesComponent } from './components/modificar-clases/modificar-clases.component';
import { NuevaClaseComponent } from './components/nueva-clase/nueva-clasecomponent';
import { map, Observable, Subscription } from 'rxjs';
import { BorrarDialogComponent } from '../shared/components/borrar-dialog/borrar-dialog.component';
import { Clase } from '../models/clase';
import { ClaseService } from './services/clase.service';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit, OnDestroy {

  public esAdmin: boolean = false
  public loading: boolean = true
  public clases: any = []
  public columnas: string[] = ['id', 'nombre', 'curso']
  public dataSource: MatTableDataSource<any> = new MatTableDataSource()
  public claseSubscripcion: Subscription
  public authSubscripcion: Subscription
  public clase$: Observable<Clase[]>

  @ViewChild(MatTable) listaClases!: MatTable<Clase>

  constructor(

    private dialog: MatDialog,
    private clasesServicio: ClaseService,
    private authServicio: AuthService

  ) {

    this.authSubscripcion = this.authServicio.obtenerSesion().subscribe(e=> {
      this.esAdmin = e.usuario?.admin || false
      this.esAdmin === true && this.columnas.push('acciones')
    })

    this.clase$ = this.clasesServicio.obtenerClases()

    this.claseSubscripcion = this.clase$.pipe(

      map((clases: Clase[]) => clases.filter((clase: any) => clase.id !== '1'))

    ).subscribe(clase => {

      this.dataSource.data = clase
      this.loading = false

    })

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.claseSubscripcion.unsubscribe()
    this.authSubscripcion.unsubscribe()
  }

  editar(elemento: Clase) {
    const dialogRef = this.dialog.open(ModificarClasesComponent, {
      width: '50%',
      data: elemento
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.clasesServicio.modificarClase(resultado)
    })
  }

  eliminar(idClase: string) {
    const dialogRef = this.dialog.open(BorrarDialogComponent, {
      width: '20%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.clasesServicio.eliminarClase(idClase)
    })
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase()
  }

  nuevaClase() {
    const dialogRef = this.dialog.open(NuevaClaseComponent, {
      width: '50%'
    })

    dialogRef.afterClosed().subscribe(resultado => {
      if (resultado) this.clasesServicio.nuevaClase(resultado)
    })
  }

}
