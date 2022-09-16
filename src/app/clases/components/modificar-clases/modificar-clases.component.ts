import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Clase } from 'src/app/models/clase'

@Component({
  selector: 'app-modificar-clases',
  templateUrl: './modificar-clases.component.html',
  styleUrls: ['./modificar-clases.component.css']
})

export class ModificarClasesComponent implements OnInit {

  formulario: FormGroup
  formFields: string[]

  constructor(

    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModificarClasesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Clase

  ) {

    this.formulario = this.fb.group({
      id: new FormControl(data.id, [Validators.required]),
      nombre: new FormControl(data.nombre, [Validators.required]),
      curso: new FormControl(data.curso, [Validators.required]),
    })

    this.formFields = ['id', 'nombre', 'curso']

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
