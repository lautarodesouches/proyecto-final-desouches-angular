import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DniPipe, NombreApellidoAlumnoPipe } from './pipes';
import { AbmAlumnoComponent, FooterComponent, ListaAlumnosComponent, NavBarComponent, ToolbarComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    FooterComponent,
    AbmAlumnoComponent,
    NombreApellidoAlumnoPipe,
    DniPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
