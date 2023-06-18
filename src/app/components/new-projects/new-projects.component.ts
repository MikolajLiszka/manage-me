import { Component } from '@angular/core';

@Component({
  selector: 'app-new-projects',
  templateUrl: './new-projects.component.html',
  styleUrls: ['./new-projects.component.scss']
})
export class NewProjectsComponent {

    onAddProject() {
      const notNull = document.getElementById('studentModel');
      if (notNull != null) {
        notNull.style.display = 'block'
      }
    }

    // onCloseProject() {
    //   const notNull = document.getElementById('studentModel');
    //   if (notNull != null) {
    //     notNull.style.display = 'none'
    //   }
    // }
}
