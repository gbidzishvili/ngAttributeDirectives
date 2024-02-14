import { Component } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-registration-pg',
  templateUrl: './student-registration-pg.component.html',
  styleUrl: './student-registration-pg.component.css',
})
export class StudentRegistrationPgComponent {
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
    console.log(this.tempStudent);
  }
}
