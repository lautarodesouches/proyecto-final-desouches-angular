import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListaAlumnosComponent } from '../components'
import { PageNotFoundComponent } from '../shared/components'

const router: Routes = [
    { path: 'alumnos', component: ListaAlumnosComponent },
    { path: 'clases', component: ListaAlumnosComponent },
    { path: 'cursos', component: ListaAlumnosComponent },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
    { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(router)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule { }