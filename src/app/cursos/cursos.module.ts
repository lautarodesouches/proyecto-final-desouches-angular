import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';

import { ModificarCursoComponent, NuevoCursoComponent } from './components';

import { SharedModule } from '../shared/shared.module';
import { CursosRoutingModule } from './routes/cursos-routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    NuevoCursoComponent,
    ModificarCursoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule
  ]
})

export class CursosModule { }