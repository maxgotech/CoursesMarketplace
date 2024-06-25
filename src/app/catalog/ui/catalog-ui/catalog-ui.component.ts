import { Component, Input } from '@angular/core';
import { CourseCardsUiComponent } from '../../../shared/ui/course-cards-ui/course-cards-ui.component';
import { Observable } from 'rxjs';
import { ICourse } from 'src/app/course/data-access/dto/course';

@Component({
    selector: 'app-catalog-ui',
    templateUrl: './catalog-ui.component.html',
    styleUrls: ['./catalog-ui.component.less'],
    standalone: true,
    imports: [CourseCardsUiComponent]
})
export class CatalogUiComponent {
  @Input() course$:Observable<ICourse[]> | undefined
  @Input() showmessage:string = ''
}
