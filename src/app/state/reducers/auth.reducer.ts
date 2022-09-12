import { createReducer, on } from '@ngrx/store';
import { AuthState } from 'src/app/models/auth.state';
import { modificarSesion, obtenerSesion } from '../actions/auth.action';

const estadoInicial: AuthState = {
    sesion: {
        sesionActiva: false,
        error: '',
        usuario: undefined,
        loading: false
    }
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