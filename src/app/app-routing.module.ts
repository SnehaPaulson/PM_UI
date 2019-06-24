import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import {AddProjectComponent} from './add-project/add-project.component';
import {AddUserComponent} from './add-user/add-user.component';
const routes: Routes = [
  { path: '', redirectTo: '/ViewTask', pathMatch: 'full' },
  { path: 'AddTask', component: AddTaskComponent },
  { path: 'ViewTask', component: ViewTaskComponent },
  { path: 'AddProject', component: AddProjectComponent },
  { path: 'AddUser', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule {



  
 }
