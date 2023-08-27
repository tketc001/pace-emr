import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalParticipantInfoComponent } from './additional-participant-info.component';

describe('AdditionalParticipantInfoComponent', () => {
  let component: AdditionalParticipantInfoComponent;
  let fixture: ComponentFixture<AdditionalParticipantInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalParticipantInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalParticipantInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
