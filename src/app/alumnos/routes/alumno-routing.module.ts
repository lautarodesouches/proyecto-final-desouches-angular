import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AlumnosComponent } from '../alumnos.component'
import { DetalleComponent } from '../components'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'detalle/:id', component: DetalleComponent },
      { path: '', component: AlumnosComponent },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AlumnosRoutingModule { }