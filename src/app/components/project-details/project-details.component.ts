import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';
import { Router } from '@angular/router';
import { Functionality } from 'src/app/models/functionality.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | undefined;
  projectName: string = '';
  functionalities: Functionality[] = [];
  showFunctionalityForm: boolean = false;
  newFunctionality: Functionality = new Functionality();

  constructor(private route: ActivatedRoute, private projectService: ProjectService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = +params.get('id')!;
      this.project = this.projectService.getProjectById(projectId);
      if (this.project) {
        this.projectName = this.project.name;
        this.getFunctionalities();
      }
    });
  }

  toggleFunctionalityForm() {
    this.showFunctionalityForm = !this.showFunctionalityForm;
  }

  createFunctionality() {
    if (this.project && this.newFunctionality.name && this.newFunctionality.description) {
      this.newFunctionality.projectId = this.project.id;
      this.projectService.addFunctionalityToProject(this.projectName, this.newFunctionality);
      this.newFunctionality = new Functionality();
      this.showFunctionalityForm = false;
      this.getFunctionalities(); 
    }
  }

  deleteFunctionality(projectId: number, functionalityId: number): void {
    if (this.project) {
      const functionalityIndex = this.functionalities.findIndex(func => func.id === functionalityId);
      if (functionalityIndex !== -1) {
        this.functionalities.splice(functionalityIndex, 1);
        this.projectService.updateFunctionality(projectId, this.functionalities);
      }
    }
  }
  
  updateFunctionality(projectId: number, functionality: Functionality): void {
    if (this.project) {
      const functionalityIndex = this.functionalities.findIndex(func => func.id === functionality.id);
      if (functionalityIndex !== -1) {
        this.functionalities[functionalityIndex] = functionality;
        this.projectService.updateFunctionality(projectId, this.functionalities);
      }
    }
  }

  getFunctionalities() {
    this.functionalities = this.projectService.getFunctionalitiesByProject(this.projectName);
  }

  projectDetails(projectId: number): void {
    this.projectService.projectDetails(projectId);
  }

  goBack() {
    this.router.navigate(['/projects']);
  }
}
