import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { PageNotFoundComponent } from '../shared/components'
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('../auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'alumnos',
        canActivate: [AuthGuard],
        loadChildren: () => import('../alumnos/alumnos.module').then(m => m.AlumnosModule)
    },
    {
        path: 'clases',
        canActivate: [AuthGuard],
        loadChildren: () => import('../clases/clases.module').then(m => m.ClasesModule)
    },
    {
        path: 'cursos',
        canActivate: [AuthGuard],
        loadChildren: () => import('../cursos/cursos.module').then(m => m.CursosModule)
    },
    { path: 'page-not-found', component: PageNotFoundComponent },
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: '**', redirectTo: 'page-not-found', pathMatch: 'full' }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutesModule { }