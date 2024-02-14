import { Component, EventEmitter, Output } from '@angular/core';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-students-form-area',
  templateUrl: './students-form-area.component.html',
  styleUrl: './students-form-area.component.css',
})
export class StudentsFormAreaComponent {
  @Output()
  studentEmitter: EventEmitter<Student> = new EventEmitter<Student>();
  tempStudent: Student = new Student();
  onUploadStdImageChange(event: Event) {
    let fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      let fileReader = new FileReader();
      fileReader.onloadend = () => {
        let base64result = fileReader.result as string;
        this.tempStudent.imgSrc = base64result;
      };
      fileReader.readAsDataURL(fileInput.files[0]);
    }
  }
  onRegisterStdBtnClick() {
    this.studentEmitter.emit(this.tempStudent);
    this.tempStudent = new Student();
  }
}
