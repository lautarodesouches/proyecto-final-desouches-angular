import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NombreApellidoAlumnoPipe, DniPipe } from './pipes';
import { BorrarDialogComponent } from './components';

@NgModule({
  declarations: [
    DniPipe,
    NombreApellidoAlumnoPipe,
    BorrarDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    DniPipe,
    NombreApellidoAlumnoPipe,
  ]
})

export class SharedModule { }