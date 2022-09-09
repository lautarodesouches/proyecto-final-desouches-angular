import { createSelector } from '@ngrx/store';
import { AuthState } from 'src/app/models/auth.state';
import { AppState } from '../app.state';

export const selectorAuth = (state: AppState) => state.auth

export const selectorObtenerSesion = createSelector(
    selectorAuth,
    (state: AuthState) => state.sesion
)

export const selectorModificarSesion = createSelector(
    selectorAuth,
    (state: AuthState) => state.sesion
)