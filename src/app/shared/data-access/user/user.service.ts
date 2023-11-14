import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient) { }

  UserData(mail:string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("mail",mail);
		return this.http.get<any>('/api/user/data',{params:queryParams});
	}

  pfpLoad(pfp:FormData){
    return this.http.post('/api/user/pfpload', pfp );
  }

  UserUpdate( id:number,name:string, secondname:string, about:string, pfp_path?:string){
    return this.http.patch('/api/user/updateuser',{id, name, secondname, about, pfp_path})
  }

}
