import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf, NgFor, CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/course/data-access/dto/course';

@Component({
    selector: 'app-course-cards-ui',
    templateUrl: './course-cards-ui.component.html',
    styleUrls: ['./course-cards-ui.component.less'],
    standalone: true,
    imports: [NgIf, NgFor, RouterLink, CommonModule]
})
export class CourseCardsUiComponent implements OnChanges{

  @Input() course$:Observable<ICourse[]> | undefined


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['course$'].currentValue!=null){
      this.loaded=true
    }
  }

  

  path:string = 'http://localhost:3000/courses/images'
  loaded:boolean=false;

}
