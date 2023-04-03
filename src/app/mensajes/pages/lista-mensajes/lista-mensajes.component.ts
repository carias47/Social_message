import { Component } from '@angular/core';
import { Mensaje } from '../../interfaces/Mensaje';
import { MensajeService } from '../../services/mensaje.service';

@Component({
  selector: 'app-lista-mensajes',
  templateUrl: './lista-mensajes.component.html',
  styleUrls: ['./lista-mensajes.component.css'],
})
export class ListaMensajesComponent {
  public search: string = '';
  mensajes: Mensaje[] = [];
  listaVacia = undefined;

  constructor(private mensajeService: MensajeService) {}

  ngOnInit(): void {
    this.cargarProductos();
  }

  cargarProductos(): void {
    this.mensajeService.lista().subscribe(
      (data) => {
        this.mensajes = data;
        this.listaVacia = undefined;
      },
      (err) => {
        this.listaVacia = err.error.message;
      }
    );
  }
  onSearchMessage(search: string) {
    this.search = search;
  }
}
