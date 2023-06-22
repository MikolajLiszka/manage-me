// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tasks',
//   templateUrl: './tasks.component.html',
//   styleUrls: ['./tasks.component.scss']
// })
// export class TasksComponent {

// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task, TaskStatus } from 'src/app/models/task.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TaskComponent implements OnInit {
  projectId!: number;
  functionalityId!: number;
  tasks: Task[] = [];
  newTask: Task = new Task();

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = +params['projectId'];
      this.functionalityId = +params['functionalityId'];
      this.tasks = this.projectService.getTasks(this.projectId, this.functionalityId);
    });
  }

  addTask(): void {
    this.projectService.addTask(this.projectId, this.functionalityId, this.newTask);
    this.newTask = new Task();
  }


  deleteTask(taskId: number): void {
    this.projectService.deleteTask(this.projectId, this.functionalityId, taskId);
  }

  updateTaskStatus(taskId: number, status: TaskStatus): void {
    this.projectService.updateTaskStatus(this.projectId, this.functionalityId, taskId, status);
  }

  editTask(task: Task): void {
    this.projectService.editTask(this.projectId, this.functionalityId, task);
  }

  goBack() {
    this.router.navigate(['/projects']);
  }
}

