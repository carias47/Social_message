import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  nombreUsuario!: string;
  constructor(private tokenService: TokenService) {}

  ngOnInit() {
    this.nombreUsuario = this.tokenService.getNombreUsuario();
  }
}
