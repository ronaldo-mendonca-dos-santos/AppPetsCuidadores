import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuidadorFormPage } from './cuidador-form.page';

const routes: Routes = [
  {
    path: '',
    component: CuidadorFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuidadorFormPageRoutingModule {}
