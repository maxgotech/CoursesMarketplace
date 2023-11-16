import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-course-cards-ui',
  templateUrl: './course-cards-ui.component.html',
  styleUrls: ['./course-cards-ui.component.less']
})
export class CourseCardsUiComponent implements OnChanges{
  constructor(){}

  @Input() courses:any


  ngOnChanges(changes: SimpleChanges): void {
    if(changes['courses'].currentValue!=null){
      this.loaded=true
      console.log(this.courses)
    }
  }

  

  path:string = 'http://localhost:3000/courses/images'
  loaded:boolean=false;

}
