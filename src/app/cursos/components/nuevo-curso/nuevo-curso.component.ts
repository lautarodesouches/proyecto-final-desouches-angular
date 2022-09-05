import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nuevo-curso',
  templateUrl: './nuevo-curso.component.html',
  styleUrls: ['./nuevo-curso.component.css']
})
export class NuevoCursoComponent implements OnInit {

  formulario: FormGroup
  formFields: string[]

  constructor(

    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NuevoCursoComponent>

  ) {

    this.formulario = fb.group({
      id: new FormControl('', []),
      comision: new FormControl('', [Validators.required]),
      nombre: new FormControl('', [Validators.required]),
      profesor: new FormControl('', [Validators.required])
    })

    this.formFields = ['id', 'comision', 'nombre', 'profesor']

  }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close()
  }

  agregar() {
    if (this.formulario.valid) this.dialogRef.close(this.formulario.value)
  }

}
