import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-card-ui',
  templateUrl: './user-card-ui.component.html',
  styleUrls: ['./user-card-ui.component.less']
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
