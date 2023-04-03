import { Component, Input, OnInit } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';
import { Mensaje } from '../../interfaces/Mensaje';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css'],
})
export class PreviewComponent implements OnInit {
  mensajes: Mensaje[] = [];
  date: Date = new Date();
  fechaCreated!: Date;
  @Input() titulo: string = '';
  @Input() descripcion: string = '';

  ngOnInit(): void {
    this.fechaCreated = this.date;
  }
}
