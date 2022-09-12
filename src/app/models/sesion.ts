import { Usuario } from './usuario'

export interface Sesion{
    sesionActiva: boolean
    error?: string
    usuario?: Usuario
    loading: boolean
}