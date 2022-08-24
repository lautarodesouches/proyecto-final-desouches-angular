import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoadingComponent, NavBarComponent, FooterComponent, PageNotFoundComponent, ToolbarComponent } from './shared/components';

import { ModificarAlumnoComponent, ListaAlumnosComponent, BorrarAlumnoComponent, NuevoAlumnoComponent } from './components';
import { DniPipe, NombreApellidoAlumnoPipe } from './pipes';
import { TitleFontSizeDirective } from './directives';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';

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
