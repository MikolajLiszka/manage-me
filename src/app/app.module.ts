import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BtnCreateNewProjComponent } from './components/btn-create-new-proj/btn-create-new-proj.component';
import { NewProjectsComponent } from './components/new-projects/new-projects.component';
import { NewProjectFormComponent } from './components/new-project-form/new-project-form.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BtnCreateNewProjComponent,
    NewProjectsComponent,
    NewProjectFormComponent,
    ProjectDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
