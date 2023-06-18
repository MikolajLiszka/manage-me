import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service'

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.scss']
})
export class NewProjectsComponent {
  projects: Project[] = [];

  // ngOnInit() {
  //   const storedProjects = localStorage['project'];
  //   if (storedProjects) {
  //     this.projects = JSON.parse(storedProjects);
  //   }
  // }
  constructor(private projectService: ProjectService) {
    this.projects = projectService.getAllProjects();
  }

  deleteProject(id: number): void {
    this.projectService.deleteProject(id);
    this.projects = this.projectService.getAllProjects();
  }

}
