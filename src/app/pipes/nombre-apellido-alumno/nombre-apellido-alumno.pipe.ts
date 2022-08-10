import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/components/lista-alumnos/lista-alumnos.component';

@Pipe({
  name: 'nombreApellidoAlumno'
})
export class NombreApellidoAlumnoPipe implements PipeTransform {

  transform(value: Alumno, ...args: unknown[]): unknown {
    return value.nombre + ' ' + value.apellido;
  }

}
