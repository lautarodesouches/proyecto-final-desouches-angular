import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-borrar-alumno',
  templateUrl: './borrar-alumno.component.html',
  styleUrls: ['./borrar-alumno.component.css']
})
export class BorrarAlumnoComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<BorrarAlumnoComponent>
  ) { }

  ngOnInit(): void {
  }

  cancelar() {
    this.dialogRef.close(false)
  }
  borrar() {
    this.dialogRef.close(true)
  }

}
