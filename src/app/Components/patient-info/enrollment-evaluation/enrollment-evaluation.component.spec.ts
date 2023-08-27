import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentEvaluationComponent } from './enrollment-evaluation.component';

describe('EnrollmentEvaluationComponent', () => {
  let component: EnrollmentEvaluationComponent;
  let fixture: ComponentFixture<EnrollmentEvaluationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollmentEvaluationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
