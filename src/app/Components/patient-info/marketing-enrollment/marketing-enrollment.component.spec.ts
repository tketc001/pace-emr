import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingEnrollmentComponent } from './marketing-enrollment.component';

describe('MarketingEnrollmentComponent', () => {
  let component: MarketingEnrollmentComponent;
  let fixture: ComponentFixture<MarketingEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingEnrollmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
