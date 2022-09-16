import { createReducer, on } from '@ngrx/store'
import { AuthState } from 'src/app/models/auth.state'
import { modificarSesion, obtenerSesion } from '../actions/auth.action'

const sesionPorDefecto = {
    sesionActiva: false,
    error: '',
    usuario: undefined,
    loading: false
}

const sesionLocal = localStorage.getItem('sesion')

const estadoInicial: AuthState = {
    sesion: sesionLocal ? JSON.parse(sesionLocal) : sesionPorDefecto
}

export const AuthReducer = createReducer(
    estadoInicial,
    on(obtenerSesion, estado => {
        return { ...estado }
    }),
    on(modificarSesion, (estado, { sesion }) => {
        return { ...estado, sesion }
    })
)