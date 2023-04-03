export class Mensaje {
  id?: number;
  titulo: string;
  descripcion: string;
  fechaCreate?: Date;
  constructor(titulo: string, descripcion: string) {
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}
