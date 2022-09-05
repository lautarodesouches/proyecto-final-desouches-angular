import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nueva-clase',
  templateUrl: './nueva-clase.component.html',
  styleUrls: ['./nueva-clase.component.css']
})
export class NuevaClaseComponent implements OnInit {

  formulario: FormGroup
  formFields: string[]

  constructor(

    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NuevaClaseComponent>

  ) {

    this.formulario = fb.group({
      id: new FormControl('', []),
      clase: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required]),
    })

    this.formFields = ['id', 'clase', 'curso']

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
