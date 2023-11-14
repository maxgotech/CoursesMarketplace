import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardUiComponent } from './user-card-ui.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [UserCardUiComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    RouterModule
  ],
  exports:[UserCardUiComponent]
})
export class UserCardUiModule { }
