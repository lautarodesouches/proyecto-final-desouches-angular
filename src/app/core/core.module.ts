import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent, NavBarComponent, PageNotFoundComponent, ToolbarComponent } from './components';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    FooterComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    NavBarComponent,
    PageNotFoundComponent,
    ToolbarComponent
  ]
})

export class CoreModule { }