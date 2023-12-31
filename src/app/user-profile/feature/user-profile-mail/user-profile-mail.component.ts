import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UserProfileNavbarUiComponent } from '../../ui/user-profile-navbar-ui/user-profile-navbar-ui.component';
import { AuthService } from 'src/app/shared/data-access/auth/auth.service';
import { UserService } from 'src/app/shared/data-access/user/user.service';
import { lastValueFrom } from 'rxjs';
import { UserProfileMailUiComponent } from '../../ui/user-profile-mail-ui/user-profile-mail-ui.component';


export interface User {
  id: number;
  name: string;
  secondname: string;
  mail: string;
  about: string;
  pfp_path: string;
}

@Component({
  selector: 'app-user-profile-mail',
  standalone: true,
  imports: [
    CommonModule,
    UserProfileNavbarUiComponent,
    UserProfileMailUiComponent
  ],
  templateUrl: './user-profile-mail.component.html',
  styleUrl: './user-profile-mail.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserProfileMailComponent { 
  constructor(
    private authService: AuthService
  ) {}

  currentUser = this.authService.currentUserValue;
  mail = this.currentUser.mail; // почта текущего пользователя

}
