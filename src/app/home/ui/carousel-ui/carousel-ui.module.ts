import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselUiComponent } from './carousel-ui.component';



@NgModule({
  declarations: [
    CarouselUiComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[CarouselUiComponent]
})
export class CarouselUiModule { }
