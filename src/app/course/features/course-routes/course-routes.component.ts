import { CourseService } from "../../data-access/course.service";
import { CoursePreviewComponent } from "../course-preview/course-preview.component";

export default [
  {
    path: '',
    providers: [CourseService],
    children: [
      {
        path: ':translit',
        component: CoursePreviewComponent
      }
    ]
  }
]