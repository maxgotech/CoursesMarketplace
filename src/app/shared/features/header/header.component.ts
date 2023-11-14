import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../data-access/auth/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  constructor(public dialog: MatDialog, private authService: AuthService, private router:Router){}

  ngOnInit(): void {
    this.loggedIn = !!this.authService.currentUserValue;
  }

  public loggedIn = false;
  uri:string | undefined

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
