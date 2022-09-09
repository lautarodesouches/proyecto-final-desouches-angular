import { createAction, props } from '@ngrx/store'
import { Sesion } from 'src/app/models/sesion'

export const obtenerSesion = createAction(
    '[Auth] Obtener sesion'
)

export const modificarSesion = createAction(
    '[Auth] Modificar sesion',
    props<{ sesion: Sesion }>()
)