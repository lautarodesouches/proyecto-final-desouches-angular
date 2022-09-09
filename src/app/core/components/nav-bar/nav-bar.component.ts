import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppState } from '../../../state/app.state';
import { Store } from '@ngrx/store';
import { selectorObtenerSesion } from '../../../state/selectors/auth.selector';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  public esAdmin: boolean = false

  navItems: string[] = [
    'alumnos',
    'clases',
    'cursos'
  ]

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.store.select(selectorObtenerSesion).subscribe(e => {
      this.esAdmin = e.usuario?.admin || false
    })
  }

  ngOnInit(): void {
  }

  redirect(route: string) {
    this.router.navigate([route])
  }

}
