import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css']
})
export class NuevoUsuarioComponent implements OnInit {

  formulario: FormGroup
  formFields: string[]

  constructor(

    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NuevoUsuarioComponent>

  ) {

    this.formulario = this.fb.group({
      usuario: new FormControl('', [Validators.required]),
      contrasenia: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      admin: new FormControl('', [Validators.required])
    })

    this.formFields = ['usuario', 'contrasenia', 'email']

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
