import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutesModule } from './routes/routes.module';

// Shared
import { SharedModule } from './shared/shared.module';
import { TitleFontSizeDirective } from './shared/directives';
import { NavBarComponent, FooterComponent, PageNotFoundComponent, ToolbarComponent } from './shared/components';
import { AlumnosModule } from './alumnos/alumnos.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TitleFontSizeDirective,
    NavBarComponent,
    PageNotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RoutesModule,
    SharedModule,
    AlumnosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }