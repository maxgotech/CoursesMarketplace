import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardsUiComponent } from './course-cards-ui.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CourseCardsUiComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[CourseCardsUiComponent]
})
export class CourseCardsUiModule { }
