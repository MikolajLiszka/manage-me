import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';
import { Functionality } from '../models/functionality.model';
import { Task, TaskStatus } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projectIdCounter: number = 0;
  private projects: Project[] = [];

  constructor(private router: Router) {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
      this.projects = JSON.parse(savedProjects);
    }
  }

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

  functionalityDetails(functionalityId: number): void {
    this.router.navigate(['/functionality-details', functionalityId]);
  }

  generateUniqueId(): number {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000);
    const uniqueId = parseInt(`${timestamp}${random}`);
    const projects = this.getAllProjects();
  
    if (projects.some(project => project.id === uniqueId)) {
      return this.generateUniqueId();
    }
  
    return uniqueId;
  }

  addFunctionalityToProject(projectName: string, functionality: Functionality): void {
    const project = this.projects.find(project => project.name === projectName);
    if (project) {
      functionality.id = this.generateUniqueId();
      if (!project.functionalities) {
        project.functionalities = [];
      }
      project.functionalities.push(functionality);
      this.saveProjectsToLocalStorage(this.projects);
    }
  }

  deleteFunctionality(projectId: number, functionalityId: number): void {
    const project = this.getProjectById(projectId);
    if (project) {
      project.functionalities = project.functionalities.filter(func => func.id !== functionalityId);
      this.saveProjectsToLocalStorage(this.projects);
    }
  }
  
  updateFunctionality(projectId: number, functionalities: Functionality[]): void {
    const project = this.getProjectById(projectId);
    if (project) {
      project.functionalities = functionalities;
      this.saveProjectsToLocalStorage(this.projects);
    }
  }

  editFunctionality(projectId: number, functionality: Functionality): void {
    const project = this.getProjectById(projectId);
    if (project) {
      const functionalityIndex = project.functionalities.findIndex(func => func.id === functionality.id);
      if (functionalityIndex !== -1) {
        project.functionalities[functionalityIndex] = functionality;
        this.saveProjectsToLocalStorage(this.projects);
      }
    }
  }

  addTask(projectId: number, functionalityId: number, task: Task): void {
    const project = this.getProjectById(projectId);
    if (project) {
      const functionality = project.functionalities.find(func => func.id === functionalityId);
      if (functionality) {
        task.id = this.generateUniqueId();
        functionality.tasks.push(task);
        this.saveProjectsToLocalStorage(this.projects);
      }
    }
  }

  getTasksByFunctionality(projectId: number, functionalityId: number): Task[] {
    const project = this.getProjectById(projectId);
    if (project) {
      const functionality = project.functionalities.find(func => func.id === functionalityId);
      if (functionality) {
        return functionality.tasks;
      }
    }
    return [];
  }

  saveProjectsToLocalStorage(projects: Project[]): void {
    localStorage.setItem('projects', JSON.stringify(projects));
  }

  getFunctionalitiesByProject(projectName: string): Functionality[] {
    const project = this.projects.find(project => project.name === projectName);
    return project ? project.functionalities : [];
  }

  goBackToProjectDetails(projectId: number): void {
    this.router.navigate(['project-details', projectId]);
  }

}


