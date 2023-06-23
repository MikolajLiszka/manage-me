import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { NewProjectsComponent } from './components/new-projects/new-projects.component';
import { TaskComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: NewProjectsComponent },
  { path: 'project-details/:id', component: ProjectDetailsComponent },
  { path: 'project-details/:id', component: ProjectDetailsComponent},
  { path: 'project-details/:projectId/functionality/:functionalityId/tasks', component: TaskComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
