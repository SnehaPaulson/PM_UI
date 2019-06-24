import { Component, OnInit } from '@angular/core';
import {User} from '../models/User.model';
import {UserService} from '../service/user.service';
import * as _ from "lodash";
import {FormControl, FormGroup, Validators , FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private userService:UserService, private formBuilder :FormBuilder) { }
  user=new User;
  addGroup:FormGroup= null;
  userModal=new User;
  userModalTemp=new User;
  display='';
  public users=[];
  public filterUser = '';
   ngOnInit() {

   
     this.addGroup = this.formBuilder.group({
       'firstName': new FormControl(this.user.firstName,Validators.required),
        'lastName': new FormControl(this.user.lastName),
        'employeeID': new FormControl(this.user.employeeID, Validators.required)
     });
    this.userService.viewUsers().subscribe(data =>{                    
      this.users=data;
  });
}
AddUser(){
      console.log("Is Valid " +this.addGroup.valid);
      if(this.addGroup.valid){
        this.userService.addUser(this.user).subscribe(data=>{
          if(data){
            alert("User Added Successfully!");
            this.resetForm();
            this.ngOnInit();
                   }
            });
      }
     
}
editUser(){
  this.userService.editUser(this.userModal).subscribe(data=>{
    if(data){
      alert("Details updated Successfully!");
      this.closeModalDialog();         
             }
      });
}
deleteUser(userId:number){
   this.userService.deleteUser(userId).subscribe(data=>{
  alert(data);
  this.ngOnInit();
    });
}

sortUsers(sortBy: string) {
  this.users = _.orderBy(this.users, [sortBy], ["asc"]);
 }

resetForm(){
  this.user=new User;
}

openModalDialog(userModal){
  this.userModal=userModal;
  this.userModalTemp=userModal;
    this.display='block'; 
}

closeModalDialog(){
 this.display='none'; 
 this.ngOnInit();
 }
 resetModalForm(){
  this.userModal=this.userModalTemp;
   
 }
}
