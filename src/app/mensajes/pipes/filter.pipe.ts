import { Pipe, PipeTransform } from '@angular/core';
import { Mensaje } from '../interfaces/Mensaje';

@Pipe({
  name: 'filter',
})
export class FiltroPipe implements PipeTransform {
  transform(mensajes: Mensaje[], search: string = ''): Mensaje[] {
    if (search.length === 0) return mensajes;
    const filteredMessage = mensajes.filter((msj) =>
      msj.titulo.toLowerCase().includes(search.toLowerCase())
    );

    return filteredMessage;
  }
}
