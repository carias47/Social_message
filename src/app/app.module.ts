import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './mensajes/pages/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './mensajes/components/home/home.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { MensajesRoutingModule } from './mensajes/mensajes-routing.module';
import { interceptorProvider } from './interceptors/mensaje.interceptor';

@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AuthRoutingModule,
    MensajesRoutingModule,
    ToastrModule.forRoot(),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
