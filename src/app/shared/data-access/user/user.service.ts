import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './dto/IUser';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private readonly http: HttpClient) { }

  UserData(mail:string) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("mail",mail);
		return this.http.get<IUser>('/api/user/data',{params:queryParams});
	}

  get currentUserMail(): string | null{
    return JSON.parse(localStorage.getItem('currentUser')!).mail
  }
}
