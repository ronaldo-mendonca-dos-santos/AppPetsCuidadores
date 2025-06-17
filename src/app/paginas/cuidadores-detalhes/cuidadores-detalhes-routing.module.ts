import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidadoresDetalhesPage } from './cuidadores-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: CuidadoresDetalhesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidadoresDetalhesPageRoutingModule {}
