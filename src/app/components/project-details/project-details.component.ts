import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { Router } from '@angular/router';
import { Funcionality } from 'src/app/models/funcionality.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project !: Project;
  projectName: string = '';
  functionalities: Funcionality[] = [];

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = +params.get('id')!;
      this.project = this.projectService.getProjectById(projectId) || {} as Project;
      this.projectName = 'Nazwa projektu';
      this.functionalities = this.projectService.getFuncionalitiesByProject(this.projectName);
    });
  }

    get projects(): Project[] {
    return this.projectService.getAllProjects();
  }

  projectDetails(projectId: number): void {
    this.projectService.projectDetails(projectId);
  }

  goBack() {
    this.router.navigate(['/projects']);
  }

  addFuncionality(funcionality: Funcionality) {
    this.projectService.addFuncionalityToProject(this.projectName, funcionality);
  }
}

