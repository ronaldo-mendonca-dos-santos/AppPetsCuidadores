import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PetsDetalhesPageRoutingModule } from './pets-detalhes-routing.module';

import { PetsDetalhesPage } from './pets-detalhes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PetsDetalhesPageRoutingModule
  ],
  declarations: [PetsDetalhesPage]
})
export class PetsDetalhesPageModule {}
