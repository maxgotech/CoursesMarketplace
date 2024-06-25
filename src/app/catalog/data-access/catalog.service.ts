import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ITagSearch } from './dto/ITagSearch';
import { ISearch } from './dto/ISearch';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  http = inject(HttpClient)

  TagFilter(primarytag:string, secondarytag?:string): Observable<ITagSearch> {

    let queryParams = new HttpParams();

    if(secondarytag==null){
      queryParams = queryParams.append("primarytag", primarytag);
      return this.http.get<ITagSearch>('/api/courses/catalog/tags', { params: queryParams});
    }

    queryParams = queryParams.append("primarytag", primarytag);
    queryParams = queryParams.append("secondarytag", secondarytag);

    return this.http.get<ITagSearch>('/api/courses/catalog/tags', { params: queryParams});
  }
  
  SearchCourse(searchString:string): Observable<ISearch> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("text",searchString);
    return this.http.get<ISearch>('/api/courses/search',{params:queryParams})
  }

}
