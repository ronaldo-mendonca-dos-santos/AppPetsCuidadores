import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'pets',
    loadChildren: () => import('./pages/pets/pets.module').then(m => m.PetsPageModule)
  },
  {
    path: 'pet-form',
    loadChildren: () => import('./pages/pet-form/pet-form.module').then(m => m.PetFormPageModule)
  },
  {
    path: 'cuidadores',
    loadChildren: () => import('./pages/cuidadores/cuidadores.module').then(m => m.CuidadoresPageModule)
  },
  {
    path: 'cuidador-form',
    loadChildren: () => import('./pages/cuidador-form/cuidador-form.module').then(m => m.CuidadorFormPageModule)
  }
];



@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
