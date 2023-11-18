import { CatalogComponent } from "./catalog.component";

export default [
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
]