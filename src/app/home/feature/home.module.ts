import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselUiModule } from '../ui/carousel-ui/carousel-ui.module';
import { CourseCardsUiModule } from 'src/app/shared/ui/course-cards-ui/course-cards-ui.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselUiModule,
    CourseCardsUiModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
