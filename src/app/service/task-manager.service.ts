import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Task} from '../models/Task.model';
import { Observable} from 'rxjs';
const baseUrl = 'http://localhost:9000/projectmanager/task/';

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {


  constructor(private http:HttpClient) { }
  
  addTask(taskData:Task) : Observable <any>{
        return this.http.post(baseUrl+'addTask',taskData);
  }
  updateTask(taskData:Task) : Observable <any>{
    return this.http.post(baseUrl+'updateTask',taskData);
}
  viewtask() : Observable <any>{
       return this.http.get(baseUrl+'viewTasks');
  }
  endTask(taskData:Task) : Observable <any>{
    return this.http.post(baseUrl+'endTask',taskData);
}
validateParentTask(parentTask:string) : Observable <any>{
  return this.http.get(baseUrl+'validateParentTask/'+ parentTask);
}
}
