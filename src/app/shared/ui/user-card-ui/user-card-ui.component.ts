import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-user-card-ui',
    templateUrl: './user-card-ui.component.html',
    styleUrls: ['./user-card-ui.component.less'],
    standalone: true,
    imports: [MatMenuModule, MatDividerModule, RouterLink, MatIconModule]
})
export class UserCardUiComponent {
  constructor(){
    this.pfp = "http://localhost:3000/user/images" + localStorage.getItem('pfpPath')!; //автарка
  }

  pfp:any

  @Input() user:any;

  @Output() LogOut = new EventEmitter<boolean>();

  Logout(){
    this.LogOut.emit(true)
  }

}
