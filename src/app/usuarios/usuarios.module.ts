import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './routes/usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';
import { SharedModule } from '../shared/shared.module';
import { ModificarUsuarioComponent, NuevoUsuarioComponent } from './components';

@NgModule({
  declarations: [
    UsuariosComponent,
    ModificarUsuarioComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    SharedModule
  ]
})

export class UsuariosModule { }