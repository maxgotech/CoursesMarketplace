import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CoursePreviewUiComponent } from '../../ui/course-preview-ui/course-preview-ui.component';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../data-access/course.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-course-preview',
  standalone: true,
  imports: [
    CommonModule,
    CoursePreviewUiComponent
  ],
  templateUrl: './course-preview.component.html',
  styleUrl: './course-preview.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursePreviewComponent implements OnInit {
  constructor(private route: ActivatedRoute, private courseService: CourseService, private cdr: ChangeDetectorRef) {
    this.route.params.subscribe((params) => {
      this.translit = params['translit'];
    });
  }

  async ngOnInit() {
    await this.getid(this.translit!)
    await this.CoursePlan(this.id!)
  }

  translit: string | undefined;
  plan: any;
  id:number | undefined

  async CoursePlan(id: number) { // получение информации о курсе и модулях
    this.courseService.ModuleListByCourseID(id).subscribe((data) => {
      this.plan = data[0];
      this.cdr.detectChanges()
    })
  }

  async getid(translit: string) {
    const data = this.courseService.FindCourseByTranslit(translit)
    const response = await lastValueFrom(data)
    this.id = response.id
  }

}
