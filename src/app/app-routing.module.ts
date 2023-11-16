import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'catalog',
    loadChildren: async () =>
    (await import('./catalog/feature/catalog.module')).CatalogModule
  },
  {
    path: '',
    loadChildren: async () =>
    (await import('./home/feature/home.module')).HomeModule
  },
  {
    path:'**',
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
