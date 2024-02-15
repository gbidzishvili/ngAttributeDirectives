import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentRegistrationPgComponent } from './student-registration-pg/student-registration-pg.component';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { StudentsCardsAreaComponent } from './student-registration-pg/students-cards-area/students-cards-area.component';
import { StudentsFormAreaComponent } from './student-registration-pg/students-form-area/students-form-area.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentRegistrationPgComponent,
    StudentsCardsAreaComponent,
    StudentsFormAreaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MatCardModule],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
