import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Alumno } from 'src/app/models/alumno'
import { AlumnoService } from '../../services/alumno.service'

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})

export class DetalleComponent implements OnInit {

  public alumno!: Alumno
  public cols: string[] = ['nombre', 'apellido', 'email', 'telefono', 'dni', 'pais', 'activo', 'id']

  constructor(

    private router: Router,
    private alumnoServicio: AlumnoService,
    private route: ActivatedRoute

  ) {

  }

  ngOnInit(): void {

    this.route.params.subscribe((params: any) => {

      this.alumnoServicio.detalleAlumno(params['id'])

      this.alumnoServicio.obtenerAlumnos().subscribe((data) => {
        
        if (data.length === 1) this.alumno = data[0]
        
      })

    })

  }

  irAtras() {
    this.router.navigate(['alumnos'])
  }

}
