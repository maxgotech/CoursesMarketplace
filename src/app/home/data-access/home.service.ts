import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICourse } from 'src/app/course/data-access/dto/course';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private readonly http: HttpClient) { }

  Allcourses() {
		return this.http.get<ICourse[]>('/api/courses/allcourses');
	}

}
