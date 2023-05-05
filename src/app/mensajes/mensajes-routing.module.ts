import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMensajesComponent } from './pages/lista-mensajes/lista-mensajes.component';

import { CreateMensajesComponent } from './pages/create-mensajes/create-mensajes.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './pages/navbar/navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'mensajes',
        component: ListaMensajesComponent,
      },
      {
        path: 'mis-mensajes',
        component: ListaMensajesComponent,
      },
      {
        path: 'add-mensaje',
        component: CreateMensajesComponent,
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesRoutingModule {}
