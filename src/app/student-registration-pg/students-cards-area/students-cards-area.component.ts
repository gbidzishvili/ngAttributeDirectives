import { Component, Input } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students-cards-area',
  templateUrl: './students-cards-area.component.html',
  styleUrl: './students-cards-area.component.css',
})
export class StudentsCardsAreaComponent {
  @Input()
  students: Student[] = [];
}
