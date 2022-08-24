import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';

import { ModificarCursoComponent, NuevoCursoComponent } from './components';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CursosComponent,
    NuevoCursoComponent,
    ModificarCursoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class CursosModule { }