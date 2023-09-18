import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentApprovalComponent } from './student-approval.component';

describe('StudentApprovalComponent', () => {
  let component: StudentApprovalComponent;
  let fixture: ComponentFixture<StudentApprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentApprovalComponent]
    });
    fixture = TestBed.createComponent(StudentApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
