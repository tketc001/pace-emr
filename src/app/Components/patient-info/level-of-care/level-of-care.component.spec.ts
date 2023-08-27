import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelOfCareComponent } from './level-of-care.component';

describe('LevelOfCareComponent', () => {
  let component: LevelOfCareComponent;
  let fixture: ComponentFixture<LevelOfCareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelOfCareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelOfCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
