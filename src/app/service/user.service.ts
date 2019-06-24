import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../models/user.model';
import { Observable} from 'rxjs';
const baseUrl = 'http://localhost:9000/projectmanager/user/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

addUser(user:User):Observable<any>{
        return this.http.post(baseUrl+'addUser',user);
}
editUser(user:User):Observable<any>{
  return this.http.post(baseUrl+'editUser',user);
}
deleteUser(userId:number):Observable<any>{
  return this.http.delete(baseUrl+'deleteUser/'+userId, { responseType: 'text' });
}
viewUsers() : Observable <any>{
  return this.http.get(baseUrl+'viewUsers');
}
}
