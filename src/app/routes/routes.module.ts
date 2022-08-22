import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ListaAlumnosComponent, PageNotFoundComponent, ClasesComponent } from '../components'

const router: Routes = [
    { path: 'lista-alumnos', component: ListaAlumnosComponent },
    { path: 'clases', component: ClasesComponent },
    { path: 'clases', component: ListaAlumnosComponent },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '', redirectTo: 'lista-alumnos', pathMatch: 'full' },
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