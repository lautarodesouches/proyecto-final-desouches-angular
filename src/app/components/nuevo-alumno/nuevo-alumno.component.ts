import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent implements OnInit {

  formulario: FormGroup

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<NuevoAlumnoComponent>,
  ) {
    this.formulario = fb.group({
      id: new FormControl(),
      nombre: new FormControl(),
      apellido: new FormControl(),
      email: new FormControl(),
      telefono: new FormControl(),
      dni: new FormControl(),
      pais: new FormControl(),
      activo: new FormControl(),
    })
  }

  ngOnInit(): void {
  }

  cerrar() {
    this.dialogRef.close()
  }
  agregar() {
    this.dialogRef.close(this.formulario.value)
  }

}
