import { Component } from '@angular/core';
import { TokenService } from '../../services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLogged: boolean = false;

  constructor(private tokenService: TokenService, private router: Router) {}

  ngOnInit(): void {
    this.tokenService.isLogged()
      ? (this.isLogged = true)
      : (this.isLogged = false);
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/auth']);
  }
}
