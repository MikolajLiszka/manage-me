
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
  projectId!: string;
  functionalityId!: string;
  tasks: Task[] = [];
  newTask: Task = new Task();

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit() {  }

  createTask(taskName: string) {
    const task: Task = new Task();
    task.name = taskName;
    task.functionalityId = Number(this.functionalityId);
  
    this.tasks.push(task);
  
    this.newTask = new Task();
    console.log(task);
  }

  
}

