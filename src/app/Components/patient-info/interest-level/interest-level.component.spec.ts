import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestLevelComponent } from './interest-level.component';

describe('InterestLevelComponent', () => {
  let component: InterestLevelComponent;
  let fixture: ComponentFixture<InterestLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
