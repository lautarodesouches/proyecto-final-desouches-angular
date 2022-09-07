import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Proyecto Final Desouches Angular'
  showFiller: boolean = true
  estaLogueado: boolean

  constructor() {
    this.estaLogueado = false
  }

}