import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MatButtonModule
  ]
})

export class AuthModule { }