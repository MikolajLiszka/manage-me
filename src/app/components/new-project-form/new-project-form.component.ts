import { Component } from '@angular/core';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service'


@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss']
})
export class NewProjectFormComponent {
  project: Project = new Project();

  constructor(private projectService: ProjectService) { }

  addProject(): void {
    this.projectService.addProject(this.project);
    this.project = new Project(); 
  }
}

