import { UserProfileService } from "../../data-access/user-profile.service";
import { UserProfileEditComponent } from "../user-profile-edit/user-profile-edit.component";

export default [
  {
    path:'',
    providers:[UserProfileService],
    children: [
      {
        path: 'edit',
        component: UserProfileEditComponent
      },
      {
        path: 'mail',
        component: UserProfileEditComponent
      },
      {
        path: 'pass',
        component: UserProfileEditComponent
      }
    ]
  }
]