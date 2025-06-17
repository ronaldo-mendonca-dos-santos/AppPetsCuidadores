import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'entrar',
    pathMatch: 'full'
  },
  {
    path: 'pets',
    loadChildren: () => import('./paginas/pets/pets.module').then( m => m.PetsPageModule)
  },
  {
    path: 'pets-detalhes',
    loadChildren: () => import('./paginas/pets-detalhes/pets-detalhes.module').then( m => m.PetsDetalhesPageModule)
  },
  {
    path: 'cuidadores',
    loadChildren: () => import('./paginas/cuidadores/cuidadores.module').then( m => m.CuidadoresPageModule)
  },
  {
    path: 'cuidadores-detalhes',
    loadChildren: () => import('./paginas/cuidadores-detalhes/cuidadores-detalhes.module').then( m => m.CuidadoresDetalhesPageModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./paginas/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'entrar',
    loadChildren: () => import('./paginas/entrar/entrar.module').then( m => m.EntrarPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
