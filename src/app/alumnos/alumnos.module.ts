import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosComponent } from './alumnos.component';

import { ModificarAlumnoComponent, NuevoAlumnoComponent } from './components';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AlumnosComponent,
    NuevoAlumnoComponent,
    ModificarAlumnoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class AlumnosModule { }