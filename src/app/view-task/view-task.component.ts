import { Component, OnInit } from '@angular/core';
import {Task} from '../models/Task.model'
import {TaskManagerService} from '../service/task-manager.service';

import { variable } from '@angular/compiler/src/output/output_ast';
import * as _ from "lodash";
import {FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private taskManagerService :TaskManagerService) { }
public tasks=[];
taskData= new Task;

public filtertask = '';
public filterparentTask = '';
public filterstartDate = '';
public filterendDate = '';
public filterfromPriority = '';
public filtertoPriority = '';
public parenttaskTemp='';
display='none'; //default Variable
  ngOnInit() {
this.taskManagerService.viewtask().subscribe((data) =>{                    
  this.tasks=data;
   });
  }
 updateTask()
  {
        this.taskManagerService.updateTask(this.taskData).subscribe((data) =>{ 
          alert("Task updated Successfully!"); 
          this.closeModalDialog();                  
         });

  }
  endTask(taskData)
  {
        this.taskManagerService.endTask(taskData).subscribe((data) =>{ 
          alert("Task ended Successfully!");
          this.ngOnInit();                
         });

  }
  
  openModalDialog(taskData){
    this.taskData=taskData;
    this.parenttaskTemp=taskData.parentTask;
    this.display='block'; //Set block css
 }

 closeModalDialog(){

  this.display='none'; //set none css after close dialog
 }
 validateParentTask()
 {
   this.taskManagerService.validateParentTask(this.taskData.parentTask).subscribe((data) =>{
                   
     this.taskData.ParentTaskID=data;
    },
   error =>{
     alert("Invalid Parent task");
      this.taskData.parentTask=this.parenttaskTemp;
   });
 }
 sortTasks(sortBy: string) {
  this.tasks = _.orderBy(this.tasks, [sortBy], ["asc"]);
}

}
