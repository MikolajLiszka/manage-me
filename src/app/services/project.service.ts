import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];


  constructor(private router: Router) {}

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectById(projectId: number): Project | undefined {
    return this.projects.find(project => project.id === projectId);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }

  deleteProject(id: number): void {
    this.projects = this.projects.filter(p => p.id !== id);
    }

  projectDetails(projectId: number) {
    this.router.navigate(['/projects', projectId]);
  }
  
}

