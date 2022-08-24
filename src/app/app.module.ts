import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutesModule } from './routes/routes.module';

// Shared
import { TitleFontSizeDirective } from './shared/directives';
import { NavBarComponent, FooterComponent, PageNotFoundComponent, ToolbarComponent } from './shared/components';

// Features
import { AlumnosModule } from './alumnos/alumnos.module';
import { CursosModule } from './cursos/cursos.module';
import { ClasesModule } from './clases/clases.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleFontSizeDirective,
    FooterComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    AlumnosModule,
    CursosModule,
    ClasesModule,
    SharedModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }