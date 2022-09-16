import { Curso } from './curso'

export interface CursosState {
    cargando: boolean
    cursos: Curso[]
}