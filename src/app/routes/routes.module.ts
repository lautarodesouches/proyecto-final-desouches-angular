import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from '../shared/components'

const router: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then( m => m.AuthModule)
    },
    {
        path: 'alumnos',
        loadChildren: () => import('../alumnos/alumnos.module').then( m => m.AlumnosModule)
    },
    {
        path: 'clases',
        loadChildren: () => import('../clases/clases.module').then( m => m.ClasesModule)
    },
    {
        path: 'cursos',
        loadChildren: () => import('../cursos/cursos.module').then( m => m.CursosModule)
    },
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