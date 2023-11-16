import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogUiComponent } from './catalog-ui.component';
import { RouterModule } from '@angular/router';
import { CourseCardsUiModule } from 'src/app/shared/ui/course-cards-ui/course-cards-ui.module';



@NgModule({
  declarations: [
    CatalogUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CourseCardsUiModule
  ],
  exports:[CatalogUiComponent]
})
export class CatalogUiModule { }
