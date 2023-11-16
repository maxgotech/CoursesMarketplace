import { Component, OnInit } from '@angular/core';
import { HomeService } from '../data-access/home.service';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor(private homeService:HomeService){}

  async ngOnInit() {
    const request = this.homeService.Allcourses()
    const response = await lastValueFrom(request)
    this.coursesData=response
  }

  coursesData:any

}
