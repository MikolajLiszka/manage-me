import { Functionality } from 'src/app/models/functionality.model';

export class Project {

    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public functionalities: Functionality[] = [],
      ) {}
}