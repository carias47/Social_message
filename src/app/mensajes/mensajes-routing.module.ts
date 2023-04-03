import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMensajesComponent } from './pages/lista-mensajes/lista-mensajes.component';

import { CreateMensajesComponent } from './pages/create-mensajes/create-mensajes.component';

const routes: Routes = [
  {
    path: '',
    children: [
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
        redirectTo: 'mensajes',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesRoutingModule {}
