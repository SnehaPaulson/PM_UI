import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {TaskManagerService} from './service/task-manager.service';
import { SearchTaskPipe } from './search-task.pipe';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddUserComponent } from './add-user/add-user.component';
import {ProjectManagerService} from './service/project-manager.service';
import { SearchUserPipe } from './add-user/search-user.pipe';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchProjectPipe } from './add-project/search-project.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    SearchTaskPipe,
    AddProjectComponent,
    AddUserComponent,
    SearchUserPipe,
    SearchProjectPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
          ],
  providers: [DatePipe,TaskManagerService,ProjectManagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
