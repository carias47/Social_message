import { Component, Input, OnInit } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';
import { Mensaje } from '../../interfaces/Mensaje';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  nombreUsuario: string = '';
  mensajes: Mensaje[] = [];
  date: Date = new Date();
  fechaCreated!: Date;
  @Input() titulo: string = '';
  @Input() descripcion: string = '';

  constructor(private tokenService: TokenService) {}

  ngOnInit(): void {
    this.fechaCreated = this.date;
    this.nombreUsuario = this.tokenService.getNombreUsuario();
  }
}
