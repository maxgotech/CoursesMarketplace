import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderUiModule } from '../../ui/header-ui/header-ui.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderUiModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
