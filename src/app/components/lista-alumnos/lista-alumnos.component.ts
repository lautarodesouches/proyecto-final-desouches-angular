import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AbmAlumnoComponent } from '../abm-alumno/abm-alumno.component';

export interface Alumno {
  id: number
  nombre: string
  apellido: string
  email: string
  telefono: number
  dni: number
  pais: string
  activo: boolean
}

const ELEMENT_DATA: Alumno[] = [
  { id: 1, nombre: 'Cristian', apellido: 'Amador', email: 'cristian@email.com', telefono: 5497002343155, dni: 20860655, pais: 'AR', activo: true },
  { id: 2, nombre: 'Timoteo', apellido: 'Bayona', email: 'timoteo@email.com', telefono: 5498089779700, dni: 34065191, pais: 'AR', activo: false },
  { id: 3, nombre: 'Ester', apellido: 'Rios', email: 'ester@email.com', telefono: 5761457236682, dni: 87441870, pais: 'CO', activo: true },
  { id: 4, nombre: 'Sigfrido', apellido: 'Gallart', email: 'sigfrido@email.com', telefono: 5494542679638, dni: 82472366, pais: 'AR', activo: true },
  { id: 5, nombre: 'Camila', apellido: 'Hidalgo', email: 'camila@email.com', telefono: 5985982346426, dni: 75810926, pais: 'UR', activo: true },
  { id: 6, nombre: 'Haroldo', apellido: 'Campos', email: 'haroldo@email.com', telefono: 5491428132549, dni: 22983104, pais: 'AR', activo: true },
  { id: 7, nombre: 'Lorena', apellido: 'Hernandez', email: 'lorena@email.com', telefono: 5710984430382, dni: 85902663, pais: 'CO', activo: false },
  { id: 8, nombre: 'Natalia', apellido: 'Batalla', email: 'natalia@email.com', telefono: 5650388923792, dni: 80062954, pais: 'CL', activo: true },
  { id: 9, nombre: 'Jose', apellido: 'Clavero', email: 'jose@email.com', telefono: 5491877131249, dni: 87124785, pais: 'AR', activo: true },
  { id: 10, nombre: 'Francisco', apellido: 'León', email: 'francisco@email.com', telefono: 5692457848113, dni: 57294097, pais: 'CL', activo: true }
]

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  columnas: string[] = ['nombreCompleto', 'email', 'telefono', 'dni', 'pais', 'activo', 'acciones']

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource(ELEMENT_DATA)

  @ViewChild(MatTable) listaAlumnos!: MatTable<Alumno>

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  editar(elemento: Alumno) {
    const dialogRef = this.dialog.open(AbmAlumnoComponent, {
      width: '50%',
      minHeight: '60%',
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
    this.dataSource.data = this.dataSource.data.filter((alumno: Alumno) => alumno.id !== idAlumno)
  }

  filtrar(event: Event) {
    const valorObtenido = (event.target as HTMLInputElement).value
    this.dataSource.filter = valorObtenido.trim().toLocaleLowerCase()
  }

}
