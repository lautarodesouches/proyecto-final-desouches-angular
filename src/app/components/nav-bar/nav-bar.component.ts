import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface navItem {
  title: string
  route: string
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  navItems: navItem[] = [
    { title: 'alumnos', route: 'lista-alumnos' },
    { title: 'clases', route: 'clases' },
    { title: 'cursos', route: 'cursos' }
  ]

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  redirect(route: string) {
    this.router.navigate([route])
  }

}
