import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  public usuarioEsAdmin: boolean = false

  navItems: string[] = [
    'alumnos',
    'clases',
    'cursos'
  ]

  constructor(
    private router: Router,
    private auth: AuthService
  ) {
    this.auth.sesionSubject.subscribe((e) => {      
      this.usuarioEsAdmin = e.usuario?.admin || false
    })
  }

  ngOnInit(): void {
  }

  redirect(route: string) {
    this.router.navigate([route])
  }

}
