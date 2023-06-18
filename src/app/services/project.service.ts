import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

  getAllProjects(): Project[] {
    return this.projects;
  }

  addProject(project: Project): void {
    this.projects.push(project);
  }

  updateProject(project: Project): void {
    const index = this.projects.findIndex(p => p.id === project.id);
    if (index !== -1) {
      this.projects[index] = project;
    }
  }

  deleteProject(id: number): void {
    this.projects = this.projects.filter(p => p.id !== id);
  }
}
