import { Routes } from "@angular/router";

export const appRoutes: Routes = [
  {
    path: 'teaching',
    loadChildren: async () =>(await import('./content-creation/features/content-creation-routes/content-creation-routes.component'))
  },
  {
    path: 'user-profile',
    loadChildren: async () =>(await import('./user-profile/feature/user-profile-routes/user-profile-routes.component'))
  },
  {
    path: 'catalog',
    loadChildren: async () =>(await import('./catalog/feature/catalog-routes.component'))
  },
  {
    path: '',
    loadChildren: async () =>(await import('./home/feature/home-routes.component'))
  },
  {
    path:'**',
    redirectTo:''
  }
];

