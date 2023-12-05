import { CoursesService } from "../../data-access/courses/courses.service";
import { StudiesService } from "../../data-access/studies/studies.service";
import { CoursesCreationComponent } from "../courses/courses-creation/courses-creation.component";
import { StudiesContentComponent } from "../studies/studies-content/studies-content.component";
import { StudiesCreationComponent } from "../studies/studies-creation/studies-creation.component";

export default [
  {
    path: 'courses',
    providers: [CoursesService],
    children:[
      {
        path:'',
        component: CoursesCreationComponent,
      }
    ]
  },
  {
    path: 'studies',
    providers: [StudiesService],
    children:[
      {
        path:'',
        component: StudiesCreationComponent
      },
      {
        path:':id',
        component:StudiesContentComponent
      }
    ]
  }
]