import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnCreateNewProjComponent } from './components/btn-create-new-proj/btn-create-new-proj.component';
import { NewProjectsComponent } from './components/new-projects/new-projects.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
// import { TasksComponent } from './components/tasks/tasks.component';
import { TaskComponent } from './components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnCreateNewProjComponent,
    NewProjectsComponent,
    ProjectDetailsComponent,
    TaskComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
