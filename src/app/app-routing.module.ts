import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { NewProjectsComponent } from './components/new-projects/new-projects.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  // { path: 'project-details/:id', component: ProjectDetailsComponent },
  { path: '', redirectTo: '/projects', pathMatch: 'full' },
  { path: 'projects', component: NewProjectsComponent },
  { path: 'project-details/:id', component: ProjectDetailsComponent },
  { path: 'functionality-details/:id', component: TasksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
