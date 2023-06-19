

import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [];

  getProjects(): Project[] {
    return this.projects;
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
}

