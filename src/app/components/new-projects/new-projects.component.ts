import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.scss']
})
export class NewProjectsComponent {
  projects: Project[] = [];
  showForm: boolean = false;
  newProject: Project = {
    id: 0,
    name: '',
    description: ''
  };

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addProject(project: Project) {
    this.projectService.addProject(project);
    this.projects = this.projectService.getProjects();
    this.showForm = false;
    this.newProject = {
      id: 0,
      name: '',
      description: ''
    };
  }

  deleteProject(id: number): void {
    this.projectService.deleteProject(id);
    this.projects = this.projectService.getAllProjects();
  }

  projectDetails(projectId: number) {
    this.projectService.projectDetails(projectId);
  }

}
