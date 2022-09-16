import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';

import { ModificarCursoComponent, NuevoCursoComponent } from './components';

import { SharedModule } from '../shared/shared.module';
import { CursosRoutingModule } from './routes/cursos-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromCursos from './state/cursos.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CursosEffects } from './state/cursos.effects';

@NgModule({
  declarations: [
    CursosComponent,
    NuevoCursoComponent,
    ModificarCursoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CursosRoutingModule,
    StoreModule.forFeature(fromCursos.cursosFeatureKey, fromCursos.reducer),
    EffectsModule.forFeature([CursosEffects])
  ]
})

export class CursosModule { }