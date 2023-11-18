import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: 'catalog',
    loadChildren: async () =>(await import('./catalog/feature/catalog-routing.component'))
  },
  {
    path: '',
    loadChildren: async () =>(await import('./home/feature/home-routing.component'))
  },
  {
    path:'**',
    redirectTo:''
  }
];

