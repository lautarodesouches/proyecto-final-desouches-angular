import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';


@Component({
  selector: 'app-modificar-alumno',
  templateUrl: './modificar-alumno.component.html',
  styleUrls: ['./modificar-alumno.component.css']
})
export class ModificarAlumnoComponent implements OnInit {

  formulario: FormGroup
  formFields: string[]

  constructor(

    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModificarAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno

  ) {

    this.formulario = this.fb.group({
      id: new FormControl(data.id, [Validators.required]),
      nombre: new FormControl(data.nombre, [Validators.required]),
      apellido: new FormControl(data.apellido, [Validators.required]),
      email: new FormControl(data.email, [Validators.required]),
      telefono: new FormControl(data.telefono, [Validators.required]),
      pais: new FormControl(data.pais, [Validators.required]),
      activo: new FormControl(data.activo, [Validators.required])
    })

    this.formFields = ['nombre', 'apellido', 'email', 'telefono', 'pais']

  }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close()
  }

  actualizar() {
    if (this.formulario.valid) this.dialogRef.close(this.formulario.value)
  }

}
