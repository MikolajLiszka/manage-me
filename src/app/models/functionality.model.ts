import { Task } from "./task.model";

export class Functionality {

    constructor(
      public id: number = 0,
      public name: string = '',
      public description: string = '',
      public priority: number = 0,
      public projectId: number = 0,
      public owner: string = '',
      public state: string = TaskStatus.TODO,
      public tasks: Task[] = []
    ) {}
  }

  export enum TaskStatus {
    TODO = 'Todo',
    DOING = 'Doing',
    DONE = 'Done'
  }