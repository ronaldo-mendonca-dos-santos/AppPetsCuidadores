import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuidadoresDetalhesPageRoutingModule } from './cuidadores-detalhes-routing.module';

import { CuidadoresDetalhesPage } from './cuidadores-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuidadoresDetalhesPageRoutingModule
  ],
  declarations: [CuidadoresDetalhesPage]
})
export class CuidadoresDetalhesPageModule {}
