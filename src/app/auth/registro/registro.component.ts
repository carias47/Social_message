import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { nuevoUsuarioDto } from 'src/app/mensajes/interfaces/nuevo-usuario.dto';
import { AuthService } from 'src/app/mensajes/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
    `
      #card {
        width: 500px;
      }
    `,
  ],
})
export class RegistroComponent {
  usuario!: nuevoUsuarioDto;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  constructor(
    private authService: AuthService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  onRegister(): void {
    this.usuario = new nuevoUsuarioDto(
      this.nombre,
      this.nombreUsuario,
      this.email,
      this.password
    );
    this.authService.registro(this.usuario).subscribe(
      (data) => {
        this.toastrService.success(data.message, 'Ok', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
        this.router.navigate(['auth/login']);
      },
      (err) => {
        this.toastrService.error(err.error.message, 'Fail', {
          timeOut: 3000,
          positionClass: 'toast-top-center',
        });
      }
    );
  }
}
