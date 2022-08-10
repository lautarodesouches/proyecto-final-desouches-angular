import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from '../lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.css']
})
export class ModificarAlumnoComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModificarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno
  ) {
    this.formulario = fb.group({
      id: new FormControl(data.id),
      nombre: new FormControl(data.nombre),
      apellido: new FormControl(data.apellido),
      email: new FormControl(data.email),
      telefono: new FormControl(data.telefono),
      dni: new FormControl(data.dni),
      pais: new FormControl(data.pais),
      activo: new FormControl(data.activo),
    })
  }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close()
  }
  
  actualizar() {
    this.dialogRef.close(this.formulario.value)
  }

}
