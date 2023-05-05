import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MensajesRoutingModule } from './mensajes-routing.module';

import { ListaMensajesComponent } from './pages/lista-mensajes/lista-mensajes.component';
import { CreateMensajesComponent } from './pages/create-mensajes/create-mensajes.component';
import { FiltroPipe } from './pipes/filter.pipe';
import { PreviewComponent } from './components/preview/preview.component';

@NgModule({
  providers: [],
  declarations: [
    ListaMensajesComponent,
    CreateMensajesComponent,
    FiltroPipe,
    PreviewComponent,
  ],
  imports: [CommonModule, MensajesRoutingModule, FormsModule, HttpClientModule],
})
export class MensajesModule {}
