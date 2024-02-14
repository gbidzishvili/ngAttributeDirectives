import { Component } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-registration-pg',
  templateUrl: './student-registration-pg.component.html',
  styleUrl: './student-registration-pg.component.css',
})
export class StudentRegistrationPgComponent {
  studentsList: Student[] = [];
  onStdEmitterSubs(student:Student){
    this.studentsList.push(student)
  }
  
}
