import { Component } from '@angular/core';
import { Mensaje } from '../../interfaces/Mensaje';
import { MensajeService } from '../../services/mensaje.service';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-lista-mensajes',
  templateUrl: './lista-mensajes.component.html',
  styleUrls: ['./lista-mensajes.component.css'],
})
export class ListaMensajesComponent {
  public search: string = '';
  mensajes: Mensaje[] = [];
  listaVacia = undefined;
  nombreUsuario: string = '';

  constructor(
    private mensajeService: MensajeService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.cargarProductos();
    this.nombreUsuario = this.tokenService.getNombreUsuario();
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
