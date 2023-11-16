import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  {
    path: ':primary_tag',
    component: CatalogComponent
  },
  {
    path: ':primary_tag/:secondary_tag',
    component: CatalogComponent
  },
  {
    path: 'search/find',
    component: CatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
