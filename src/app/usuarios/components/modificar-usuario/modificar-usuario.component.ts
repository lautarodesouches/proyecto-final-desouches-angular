import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Usuario } from '../../../models/usuario'

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.component.html',
  styleUrls: ['./modificar-usuario.component.css']
})
export class ModificarUsuarioComponent implements OnInit {

  formulario: FormGroup
  formFields: string[]

  constructor(

    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ModificarUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Usuario

  ) {

    this.formulario = fb.group({
      id: new FormControl(data.id, [Validators.required]),
      usuario: new FormControl(data.usuario, [Validators.required]),
      contrasenia: new FormControl(data.contrasenia, [Validators.required]),
      email: new FormControl(data.email, [Validators.required]),
      admin: new FormControl(data.admin, [Validators.required]),
    })

    this.formFields = [ 'usuario', 'contrasenia', 'email']

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
