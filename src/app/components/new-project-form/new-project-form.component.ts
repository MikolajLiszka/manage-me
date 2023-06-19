import { Component } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.scss']
})
export class NewProjectFormComponent {
  project: Project = new Project(0, '', ''); 

  constructor(private projectService: ProjectService) {}

  addProject() {
    this.projectService.addProject(this.project); 
    this.project = new Project(0, '', ''); 
  }
}
