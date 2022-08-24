import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ModificarAlumnoComponent, ListaAlumnosComponent, BorrarAlumnoComponent, NuevoAlumnoComponent } from './components';

import { RoutesModule } from './routes/routes.module';

// Shared
import { SharedModule } from './shared/shared.module';
import { TitleFontSizeDirective } from './shared/directives';
import { DniPipe, NombreApellidoAlumnoPipe } from './shared/pipes';
import { LoadingComponent, NavBarComponent, FooterComponent, PageNotFoundComponent, ToolbarComponent } from './shared/components';

@NgModule({
  declarations: [
    AppComponent,
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
    NavBarComponent,
    PageNotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }