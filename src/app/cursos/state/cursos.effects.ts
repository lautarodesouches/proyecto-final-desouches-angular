
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, Observable, of, retry } from "rxjs";
import { Curso } from "src/app/models/curso";
import { CursoService } from '../services/curso.service';
import { cargarCursos, cursosCargados } from "./cursos.actions";

@Injectable()
export class CursosEffects {
  cargarCursos$ = createEffect(() => this.actions$.pipe(
    ofType(cargarCursos),
    mergeMap(() => this.cursosService.obtenerCursos().pipe(
      map((c: Curso[]) => {
        console.log(c)
        return cursosCargados({ cursos: c })
      })
    ))
  ));

  constructor(
    private actions$: Actions,
    private cursosService: CursoService
  ) { }
}