import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../../features/login/login.module';
//import { RegBlockModule } from '../reg-log/reg-block/reg-block.module';
import { MatDialogModule } from '@angular/material/dialog';
import { UserCardUiModule } from '../user-card-ui/user-card-ui.module';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderUiComponent } from './header-ui.component';



@NgModule({
  declarations: [HeaderUiComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    LoginModule,
    //RegBlockModule,
    MatDialogModule,
    UserCardUiModule,
    MatMenuModule
  ],
  exports:[HeaderUiComponent]
})
export class HeaderUiModule { }
