import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppMaterialModule } from './app.materieal.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
