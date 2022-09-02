import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from '../shared/components'
import { AlumnosComponent } from '../alumnos/alumnos.component';
import { CursosComponent } from '../cursos/cursos.component';
import { ClasesComponent } from '../clases/clases.component';
import { LoginComponent } from '../auth/components';

const router: Routes = [
    { path: 'auth', component: LoginComponent },
    { path: 'alumnos', component: AlumnosComponent },
    { path: 'clases', component: ClasesComponent },
    { path: 'cursos', component: CursosComponent },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
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