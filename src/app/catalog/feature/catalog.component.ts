import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatalogService } from '../data-access/catalog.service';
import { Observable, map } from 'rxjs';
import { CatalogUiComponent } from '../ui/catalog-ui/catalog-ui.component';
import { ICourse } from 'src/app/course/data-access/dto/course';

@Component({
    selector: 'app-catalog',
    templateUrl: './catalog.component.html',
    styleUrls: ['./catalog.component.less'],
    standalone: true,
    imports: [CatalogUiComponent]
})
export class CatalogComponent implements OnInit {

  router = inject(Router)
  aroute = inject(ActivatedRoute)
  catalogService = inject(CatalogService)

  route_flag: boolean
  showmessage:string = ''

  course$: Observable<ICourse[]> | undefined // Observable with current courses

  constructor() {
    let route: string = this.router.url
    if (route.indexOf('search') !== -1) {
      this.route_flag = true
    } else {
      this.route_flag = false
    }
  }

  ngOnInit(): void {
    if (this.route_flag == true) {
      this.QuerySearch()
    } else
      if (this.route_flag == false) {
        this.TagsSearch()
      }
  }

  QuerySearch(): void {
    let search
    this.aroute.queryParamMap
      .subscribe((params) => {
        search = { ...params };
      });
    this.showmessage = 'Курсы по поиску '+ search!.params.text
    this.course$ = this.catalogService.SearchCourse(search!.params.text).pipe(map((data) => data.courses))
  }

  TagsSearch(): void {
    let primary_tag:string | undefined
    let secondary_tag: string | undefined
    this.aroute.params.subscribe((params) => {
      primary_tag = params['primary_tag'];
      secondary_tag = params['secondary_tag']
    })

    this.catalogService.TagFilter(primary_tag!, secondary_tag).subscribe(data => {
      this.showmessage = 'Курсы по тэгам ' + data.primarytag.name
      if(data.secondarytag!=null){
        this.showmessage += ' < ' + data.secondarytag.name
      }
    })

    this.course$ = this.catalogService.TagFilter(primary_tag!, secondary_tag).pipe(map((data) => data.courses))
  }
}
