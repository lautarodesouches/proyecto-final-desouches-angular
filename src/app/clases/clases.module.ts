import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClasesComponent } from './clases.component';

import { ModificarClasesComponent, NuevaClaseComponent } from './components';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ClasesComponent,
    ModificarClasesComponent,
    NuevaClaseComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})

export class ClasesModule { }