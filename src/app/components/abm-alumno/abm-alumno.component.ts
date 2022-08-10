import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from '../lista-alumnos/lista-alumnos.component';

@Component({
  selector: 'app-abm-alumno',
  templateUrl: './abm-alumno.component.html',
  styleUrls: ['./abm-alumno.component.css']
})
export class AbmAlumnoComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AbmAlumnoComponent>,
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
