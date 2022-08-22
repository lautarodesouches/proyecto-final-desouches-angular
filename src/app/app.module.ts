import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './material/app.material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ModificarAlumnoComponent, FooterComponent, ListaAlumnosComponent, NavBarComponent, ToolbarComponent, BorrarAlumnoComponent, NuevoAlumnoComponent, LoadingComponent, PageNotFoundComponent } from './components';
import { DniPipe, NombreApellidoAlumnoPipe } from './pipes';
import { TitleFontSizeDirective } from './directives';
import { RoutesModule } from './routes/routes.module';

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
    NuevoAlumnoComponent,
    LoadingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    RoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
