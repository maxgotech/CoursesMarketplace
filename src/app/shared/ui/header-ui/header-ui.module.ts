import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
//import { LoginBlockModule } from '../reg-log/login-block/login-block.module';
//import { RegBlockModule } from '../reg-log/reg-block/reg-block.module';
import { MatDialogModule } from '@angular/material/dialog';
//import { UserCardBlockModule } from './user-card-block/user-card-block.module';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderUiComponent } from './header-ui.component';



@NgModule({
  declarations: [HeaderUiComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    //LoginBlockModule,
    //RegBlockModule,
    MatDialogModule,
    //UserCardBlockModule,
    MatMenuModule
  ],
  exports:[HeaderUiComponent]
})
export class HeaderUiModule { }
