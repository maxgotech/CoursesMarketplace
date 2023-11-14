import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../data-access/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../../data-access/user/user.service';
import { lastValueFrom } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, private authService: AuthService, private router:Router,private userService:UserService){}

  async ngOnInit() {
    this.loggedIn = !!this.authService.currentUserValue;
    await this.UserData()
  }

  public loggedIn = false;
  uri:string | undefined
  currentUser? = this.authService.currentUserValue;
  user:any

  async UserData() { //данные пользователя
    if(this.currentUser!=null){
    const mail = this.currentUser.mail; //почта текущего пользователя
    const data = this.userService.UserData(mail)
    const response = await lastValueFrom(data)
    this.user = response
    }
  }

  LogOut(flag:boolean){
    if(flag==true){
      if(this.router.url=='/') {
        this.authService.logout();
        window.location.reload();
      } 
      else {
        this.authService.logout(); 
      }
    }
  }

  openLog(flag:boolean) { // открыть форму логина
    if(flag==true){
      const dialogRef = this.dialog.open(LoginComponent);
      dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
    }
  }

  async searchButton(){
    const query =(<HTMLInputElement>document.getElementById("SearchInput")).value;
    this.router.navigateByUrl('about:blank', { skipLocationChange: true }).then(() =>
    this.router.navigate(
      ['/search/find'],
      { queryParams: { text: query } }
    ));
  }

  async tagsButton(primarytag?:string,secondarytag?:string){
    if (secondarytag==null){
      this.uri = '/catalog/'+primarytag
    } else {
      this.uri = '/catalog/'+primarytag+'/'+secondarytag
    }
    this.router.navigateByUrl('about:blank', { skipLocationChange: true }).then(() =>
    this.router.navigate(
    [this.uri]
  ));
  }


}
