
export class Task {
    constructor(
      public id: number = 0,
      public name: string = '',
      public description: string = '',
      public priority: number = 0,
      public functionalityId: number = 0,
      public estimatedTime: string = '',
      public status: TaskStatus = TaskStatus.TODO,
      public addedDate: Date = new Date(),
      public startDate?: Date,
      public endDate?: Date,
      public assignedUser?: string
    ) {}
  }
  
  export enum TaskStatus {
    TODO = 'Todo',
    DOING = 'Doing',
    DONE = 'Done'
  }