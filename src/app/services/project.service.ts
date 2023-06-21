import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectIdCounter: number = 0;

  constructor(private router: Router) {}

  getProjects(): Project[] {
    return this.getAllProjects();
  }

  getProjectById(projectId: number): Project | undefined {
    const projects = this.getAllProjects();
    return projects.find(project => project.id === projectId);
  }

  getAllProjects(): Project[] {
    const storedProjects = localStorage.getItem('projects');
    if (storedProjects) {
      return JSON.parse(storedProjects);
    } else {
      return [];
    }
  }

  addProject(project: Project): void {
    const projects = this.getAllProjects();
    project.id = this.generateUniqueId();
    projects.push(project);
    this.saveProjectsToLocalStorage(projects);
  }

  deleteProject(id: number): void {
    let projects = this.getAllProjects();
    projects = projects.filter(p => p.id !== id);
    this.saveProjectsToLocalStorage(projects);
  }

  editProject(project: Project): void {
    const projects = this.getAllProjects();
    const index = projects.findIndex(p => p.id === project.id);
    if (index !== -1) {
      projects[index] = project;
      this.saveProjectsToLocalStorage(projects);
    }
  }

  projectDetails(projectId: number): void {
    this.router.navigate(['/project-details', projectId]);
  }

  generateUniqueId(): number {
    this.projectIdCounter++;
    const projects = this.getAllProjects();
  
    let uniqueId = this.projectIdCounter;
    while (projects.some(project => project.id === uniqueId)) {
      uniqueId++;
    }
    return uniqueId;
  }

  saveProjectsToLocalStorage(projects: Project[]): void {
    localStorage.setItem('projects', JSON.stringify(projects));
  }
}

