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
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      telefono: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      pais: new FormControl('', [Validators.required, Validators.maxLength(2)]),
      activo: new FormControl('', []),
    })

    this.formFields = ['nombre', 'apellido', 'email', 'telefono', 'dni', 'pais']

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
