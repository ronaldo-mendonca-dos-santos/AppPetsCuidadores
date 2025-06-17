import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PetsDetalhesPage } from './pets-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: PetsDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PetsDetalhesPageRoutingModule {}
