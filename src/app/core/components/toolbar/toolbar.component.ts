import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})

export class ToolbarComponent implements OnInit {

  public estaLogueado: boolean = false
  public usuario: string = ''
  public pathTitle: string = ''

  @Input() title: string = ''
  @Input() drawer: any

  constructor(
    private router: Router,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {
    auth.obtenerSesion().subscribe(e=> {
      this.estaLogueado = e.sesionActiva
      this.usuario = e.usuario?.usuario || ''
    })
  }

  ngOnInit(): void {

    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd),
    ).subscribe(() => {
      const rt = this.getChild(this.activatedRoute);
      rt.data.subscribe((data: any) => {
        this.titleService.setTitle(data.title)
        this.pathTitle = data.title
      })
    })

  }

  getChild(activatedRoute: ActivatedRoute): any {
    if (activatedRoute.firstChild) {
      return this.getChild(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
  }

  redirect(route: string) {
    this.router.navigate([route])
  }

  logout() {
    this.drawer.close()
    this.auth.cerrarSesion()
    this.router.navigate(['auth'])
  }

}
