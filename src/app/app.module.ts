import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutesModule } from './routes/routes.module';

import { TitleFontSizeDirective } from './shared/directives';
import { NavBarComponent, FooterComponent, PageNotFoundComponent, ToolbarComponent } from './shared/components';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AuthService } from './core/services/auth.service';

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
    SharedModule,
    CoreModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }