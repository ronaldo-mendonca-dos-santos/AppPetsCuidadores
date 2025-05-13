import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'pets',
    loadChildren: () => import('./pages/pets/pets.page').then(m => m.PetsPage)
  },
  {
    path: 'pet-form',
    loadChildren: () => import('./pages/pet-form/pet-form.page').then(m => m.PetFormPage)
  },
  {
    path: 'cuidadores',
    loadChildren: () => import('./pages/cuidadores/cuidadores.page').then(m => m.CuidadoresPage)
  },
  {
    path: 'cuidador-form',
    loadChildren: () => import('./pages/cuidador-form/cuidador-form.page').then(m => m.CuidadorFormPage)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
