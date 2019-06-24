import { Component, OnInit } from '@angular/core';
import {Project} from '../models/Project.model';
import {ProjectManagerService} from '../service/project-manager.service'
import {UserService} from '../service/user.service';
import {User} from '../models/User.model';
import * as _ from "lodash";
import {FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  
    constructor(private projectManagerService:ProjectManagerService,private userService:UserService) { }
    project=new Project;
    projectModal=new Project;
    public projects=[];
    public users=[];
    display='';
    public filterProject = '';
    ngOnInit() {
      this.projectManagerService.viewProjects().subscribe(data =>{                    
        this.projects=data;
    });
    this.userService.viewUsers().subscribe(data =>{        
      this.users=data;
  });
  }
  AddProject(){
     this.projectManagerService.addProject(this.project).subscribe(data=>{
    if(data){
      alert("Project Added Successfully!");
      this.resetForm();
      this.ngOnInit();
             }
      });
  }
  resetForm(){
    this.project=new Project;
  }
  editProject(){
    alert(this.projectModal.priority);
    this.projectManagerService.editProject(this.projectModal).subscribe(data=>{
      if(data){
        alert("Details updated Successfully!");
        this.closeModalDialog();         
               }
        });
  }
  deleteProject(projectId:number){
     this.projectManagerService.deleteProject(projectId).subscribe(data=>{
    alert(data);
    this.ngOnInit();
      });
  }
  
  sortProjects(sortBy: string) {
       this.projects = _.orderBy(this.projects, [sortBy], ["asc"]);
   }
  
 
  
  openModalDialog(projectModal){
      this.projectModal=projectModal;
      this.display='block'; 
  }
  
  closeModalDialog(){
   this.display='none'; 
   }
  }