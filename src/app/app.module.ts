import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app.material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ModificarAlumnoComponent, FooterComponent, ListaAlumnosComponent, NavBarComponent, ToolbarComponent } from './components';
import { DniPipe, NombreApellidoAlumnoPipe } from './pipes';
import { TitleFontSizeDirective } from './directives';
import { BorrarAlumnoComponent } from './components/borrar-alumno/borrar-alumno.component';
import { NuevoAlumnoComponent } from './components/nuevo-alumno/nuevo-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    FooterComponent,
    ModificarAlumnoComponent,
    NombreApellidoAlumnoPipe,
    DniPipe,
    TitleFontSizeDirective,
    ModificarAlumnoComponent,
    BorrarAlumnoComponent,
    NuevoAlumnoComponent
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
