import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginUsuarioDto } from 'src/app/mensajes/interfaces/login-usuario.dto';
import { AuthService } from 'src/app/mensajes/services/auth.service';
import { TokenService } from 'src/app/mensajes/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      #card {
        width: 500px;
      }
    `,
  ],
})
export class LoginComponent {
  usuario!: LoginUsuarioDto;
  nombreUsuario!: string;
  password!: string;
  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  onLogin(): void {
    this.usuario = new LoginUsuarioDto(this.nombreUsuario, this.password);
    this.authService.login(this.usuario).subscribe(
      (data) => {
        if (!data.token) {
          this.toastrService.error(data.response.message, 'Fail', {
            timeOut: 3000,
            positionClass: 'toast-top-center',
          });
        } else {
          this.tokenService.setToken(data.token);
          this.router.navigate(['/app']);
        }
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
