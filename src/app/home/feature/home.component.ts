import { Component, OnInit, inject } from '@angular/core';
import { HomeService } from '../data-access/home.service';
import { Observable, lastValueFrom, map } from 'rxjs';
import { CourseCardsUiComponent } from '../../shared/ui/course-cards-ui/course-cards-ui.component';
import { CarouselUiComponent } from '../ui/carousel-ui/carousel-ui.component';
import { ICourse } from 'src/app/course/data-access/dto/course';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less'],
    standalone: true,
    imports: [CarouselUiComponent, CourseCardsUiComponent]
})
export class HomeComponent {
  homeService = inject(HomeService)
  course$ = this.homeService.Allcourses()
}
