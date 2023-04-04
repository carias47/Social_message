import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLogged!: boolean;

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit(): void {
    this.isLogged = this.tokenService.isLogged();
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['auth/login']);
  }
}
