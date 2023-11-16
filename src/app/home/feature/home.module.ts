import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CarouselUiModule } from '../ui/carousel-ui/carousel-ui.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselUiModule
  ],
  exports:[HomeComponent]
})
export class HomeModule { }
