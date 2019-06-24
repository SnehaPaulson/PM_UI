import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Project} from '../models/project.model';
import { Observable} from 'rxjs';
const baseUrl = 'http://localhost:9000/projectmanager/project/';
@Injectable({
  providedIn: 'root'
})
export class ProjectManagerService {

  constructor(private http:HttpClient) { }

  addProject(project:Project):Observable<any>{
      return this.http.post(baseUrl+'addProject',project);
  }
  editProject(project:Project):Observable<any>{
    return this.http.post(baseUrl+'editProject',project);
  }
  deleteProject(projectId:number):Observable<any>{
    return this.http.delete(baseUrl+'deleteProject/'+projectId,{ responseType: 'text' });
  }
  viewProjects() : Observable <any>{
    return this.http.get(baseUrl+'viewProjects');
}
}
