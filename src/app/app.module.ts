import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './App-Structure/Calendar/calendar/calendar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { PatientPhotoComponent } from './Components/patient-info/patient-photo/patient-photo.component';
import { PatientDemographicsComponent } from './Components/patient-info/patient-demographics/patient-demographics.component';
import { UpcomingAppointmentsComponent } from './Components/patient-info/upcoming-appointments/upcoming-appointments.component';
import { MarketingEnrollmentComponent } from './Components/patient-info/marketing-enrollment/marketing-enrollment.component';
import { InterestLevelComponent } from './Components/patient-info/interest-level/interest-level.component';
import { DailyNotesComponent } from './Components/patient-info/daily-notes/daily-notes.component';
import { EnrollmentEvaluationComponent } from './Components/patient-info/enrollment-evaluation/enrollment-evaluation.component';
import { LevelOfCareComponent } from './Components/patient-info/level-of-care/level-of-care.component';
import { AdditionalParticipantInfoComponent } from './Components/patient-info/additional-participant-info/additional-participant-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavbarComponent,
    DashboardComponent,
    PatientPhotoComponent,
    PatientDemographicsComponent,
    UpcomingAppointmentsComponent,
    MarketingEnrollmentComponent,
    InterestLevelComponent,
    DailyNotesComponent,
    EnrollmentEvaluationComponent,
    LevelOfCareComponent,
    AdditionalParticipantInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
