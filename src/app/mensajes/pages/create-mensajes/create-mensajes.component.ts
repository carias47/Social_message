import { Component } from '@angular/core';
import { MensajeService } from '../../services/mensaje.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Mensaje } from '../../interfaces/Mensaje';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-create-mensajes',
  templateUrl: './create-mensajes.component.html',
  styleUrls: ['./create-mensajes.component.css'],
})
export class CreateMensajesComponent {
  titulo: string = '';
  descripcion: string = '';
  fechaCreated!: Date;
  nombreUsuario: string = '';

  constructor(
    private mensajeService: MensajeService,
    private toastr: ToastrService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const mensj = new Mensaje(this.titulo, this.descripcion);
    this.mensajeService.save(mensj).subscribe(
      (data) => {
        this.toastr.success(data.message, 'OK', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.messageCreatedOK();
      },
      (err) => {
        this.toastr.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }

  volver(): void {
    this.router.navigate(['/app']);
  }
  messageCreatedOK() {
    this.router.navigate(['/app/mis-mensajes']);
  }
}
