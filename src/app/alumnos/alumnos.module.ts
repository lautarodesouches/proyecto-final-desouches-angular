import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosComponent } from './alumnos.component';

import { BorrarAlumnoComponent, ModificarAlumnoComponent, NuevoAlumnoComponent } from './components';

import { SharedModule } from '../shared/shared.module';
import { LoadingComponent } from '../shared/components';
import { DniPipe, NombreApellidoAlumnoPipe } from '../shared/pipes';

@NgModule({
  declarations: [
    AlumnosComponent,
    NuevoAlumnoComponent,
    ModificarAlumnoComponent,
    BorrarAlumnoComponent,
    LoadingComponent,
    DniPipe,
    NombreApellidoAlumnoPipe
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class AlumnosModule { }