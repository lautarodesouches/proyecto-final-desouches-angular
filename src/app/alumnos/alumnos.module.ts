import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosComponent } from './alumnos.component';

import { ModificarAlumnoComponent, NuevoAlumnoComponent, DetalleComponent } from './components';

import { SharedModule } from '../shared/shared.module'
import { AlumnosRoutingModule } from './routes/alumno-routing.module'

@NgModule({
  declarations: [
    AlumnosComponent,
    NuevoAlumnoComponent,
    ModificarAlumnoComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosRoutingModule
  ]
})

export class AlumnosModule { }