import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRegistrationPgComponent } from './student-registration-pg.component';

describe('StudentRegistrationPgComponent', () => {
  let component: StudentRegistrationPgComponent;
  let fixture: ComponentFixture<StudentRegistrationPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentRegistrationPgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentRegistrationPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
