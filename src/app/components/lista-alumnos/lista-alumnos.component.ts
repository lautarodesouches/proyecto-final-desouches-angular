import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Alumno {
  nombre: string
  apellido: string
  email: string
  telefono: number
  dni: number
  pais: string
  activo: boolean
}

const ELEMENT_DATA: Alumno[] = [
  { nombre: 'Cristian', apellido: 'Amador', email: 'cristian@email.com', telefono: 5497002343155, dni: 20860655, pais: 'AR', activo: true },
  { nombre: 'Timoteo', apellido: 'Bayona', email: 'timoteo@email.com', telefono: 5498089779700, dni: 34065191, pais: 'AR', activo: false },
  { nombre: 'Ester', apellido: 'Rios', email: 'ester@email.com', telefono: 5761457236682, dni: 87441870, pais: 'CO', activo: true },
  { nombre: 'Sigfrido', apellido: 'Gallart', email: 'sigfrido@email.com', telefono: 5494542679638, dni: 82472366, pais: 'AR', activo: true },
  { nombre: 'Camila', apellido: 'Hidalgo', email: 'camila@email.com', telefono: 5985982346426, dni: 75810926, pais: 'UR', activo: true },
  { nombre: 'Haroldo', apellido: 'Campos', email: 'haroldo@email.com', telefono: 5491428132549, dni: 22983104, pais: 'AR', activo: true },
  { nombre: 'Lorena', apellido: 'Hernandez', email: 'lorena@email.com', telefono: 5710984430382, dni: 85902663, pais: 'CO', activo: false },
  { nombre: 'Natalia', apellido: 'Batalla', email: 'natalia@email.com', telefono: 5650388923792, dni: 80062954, pais: 'CL', activo: true },
  { nombre: 'Jose', apellido: 'Clavero', email: 'jose@email.com', telefono: 5491877131249, dni: 87124785, pais: 'AR', activo: true },
  { nombre: 'Francisco', apellido: 'León', email: 'francisco@email.com', telefono: 5692457848113, dni: 57294097, pais: 'CL', activo: true }
]

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {

  columnas: string[] = ['nombre', 'apellido', 'email', 'telefono', 'dni', 'pais', 'activo', 'acciones']

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource(ELEMENT_DATA)

  constructor() { }

  ngOnInit(): void {
  }

}
