import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Curso } from 'src/app/models/curso'

@Component({
  selector: 'app-modificar-curso',
  templateUrl: './modificar-curso.component.html',
  styleUrls: ['./modificar-curso.component.css']
})
export class ModificarCursoComponent implements OnInit {

  formulario: FormGroup
  formFields: string[]

  constructor(

    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModificarCursoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Curso

  ) {

    this.formulario = fb.group({
      id: new FormControl(data.id, [Validators.required]),
      comision: new FormControl(data.comision, [Validators.required]),
      nombre: new FormControl(data.nombre, [Validators.required]),
      profesor: new FormControl(data.profesor, [Validators.required]),
    })

    this.formFields = ['id', 'comision', 'nombre', 'profesor']

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