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
  showEditFunctionalityForm: boolean = false;
  newFunctionality: Functionality = new Functionality();
  editFunctionality: Functionality = {
    id: 0,
    name: '',
    description: '',
    priority: 0,
    projectId: 0,
    owner: '',
    state: '',
    tasks: []
  };

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

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

  updateFunctionalityState(functionality: Functionality, newState: string): void {
    functionality.state = newState;
    this.updateFunctionality(this.project!.id, functionality);
  }

  toggleFunctionalityForm() {
    this.showFunctionalityForm = !this.showFunctionalityForm;
  }

  toggleEditFunctionalityForm() {
    this.showEditFunctionalityForm = !this.showEditFunctionalityForm;
  }

  createFunctionality() {
    if (
      this.project &&
      this.newFunctionality.name &&
      this.newFunctionality.description
    ) {
      this.newFunctionality.projectId = this.project.id;
      this.projectService.addFunctionalityToProject(
        this.projectName,
        this.newFunctionality
      );
      this.newFunctionality = new Functionality();
      this.showFunctionalityForm = false;
      this.getFunctionalities();
    }
  }

  deleteFunctionality(projectId: number, functionalityId: number): void {
    if (this.project) {
      const functionalityIndex = this.functionalities.findIndex(
        func => func.id === functionalityId
      );
      if (functionalityIndex !== -1) {
        this.functionalities.splice(functionalityIndex, 1);
        this.projectService.updateFunctionality(projectId, this.functionalities);
      }
    }
  }

  updateFunctionality(projectId: number, functionality: Functionality): void {
    if (this.project) {
      const functionalityIndex = this.functionalities.findIndex(
        func => func.id === functionality.id
      );
      if (functionalityIndex !== -1) {
        this.functionalities[functionalityIndex] = functionality;
        this.projectService.updateFunctionality(projectId, this.functionalities);
      }
    }
  }

  editFunctionalityModal(functionality: Functionality) {
    this.editFunctionality = Object.assign({}, functionality);
    this.showEditFunctionalityForm = true;
  }

  saveEditedFunctionality() {
    if (this.editFunctionality && this.project) {
      const functionalityIndex = this.functionalities.findIndex(
        func => func.id === this.editFunctionality!.id
      );
      if (functionalityIndex !== -1) {
        this.functionalities[functionalityIndex] = this.editFunctionality;
        this.projectService.updateFunctionality(
          this.project.id,
          this.functionalities
        );
        this.cancelEditFunctionality();
        this.showEditFunctionalityForm = false;
      }
    }
  }

  cancelEditFunctionality() {
    this.editFunctionality = {
      id: 0,
      name: '',
      description: '',
      priority: 0,
      projectId: 0,
      owner: '',
      state: '',
      tasks: []
    };
    this.showFunctionalityForm = false;
  }

  functionalityDetails(functionalityId: number) {
    this.projectService.functionalityDetails(functionalityId);
  }

  getFunctionalities() {
    this.functionalities = this.projectService.getFunctionalitiesByProject(
      this.projectName
    );
  }

  goBack() {
    this.router.navigate(['/projects']);
  }

  getFunctionalitiesByState(state: string): Functionality[] {
    return this.functionalities.filter(func => func.state === state);
  }
}
