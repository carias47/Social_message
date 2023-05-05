import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [LoginComponent, RegistroComponent, MainComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule],
  providers: [],
})
export class AuthModule {}
