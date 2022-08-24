import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-borrar-dialog',
  templateUrl: './borrar-dialog.component.html',
  styleUrls: ['./borrar-dialog.component.css']
})
export class BorrarDialogComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<BorrarDialogComponent>
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
