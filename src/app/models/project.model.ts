import { Funcionality } from 'src/app/models/funcionality.model';

export class Project {

    constructor(
        public id: number = 0,
        public name: string = '',
        public description: string = '',
        public functionalities: Funcionality[] = [],
      ) {}
}