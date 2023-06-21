import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {
  project !: Project;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const projectId = +params.get('id')!;
      this.project = this.projectService.getProjectById(projectId) || {} as Project;
    });
  }

    get projects(): Project[] {
    return this.projectService.getAllProjects();
  }

  projectDetails(projectId: number): void {
    this.projectService.projectDetails(projectId);
  }
}

