import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dni'
})
export class DniPipe implements PipeTransform {

  transform(value: number | string, ...args: unknown[]): unknown {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

}
