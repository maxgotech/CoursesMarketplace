import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterUiComponent } from './footer-ui.component';

@NgModule({
  declarations: [FooterUiComponent],
  imports: [
    CommonModule
  ],
  exports:[FooterUiComponent]
})
export class FooterUiModule { }
