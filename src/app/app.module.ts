import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './App-Structure/Calendar/calendar/calendar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    NavbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
