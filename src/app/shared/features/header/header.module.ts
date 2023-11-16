import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HeaderUiModule } from '../../ui/header-ui/header-ui.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    HeaderUiModule,
    RouterModule
  ],
  exports:[HeaderComponent]
})
export class HeaderModule { }
