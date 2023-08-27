import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './App-Structure/Calendar/calendar/calendar.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';

const routes: Routes = [
  // public paths
  {path: "", component: DashboardComponent},
  {path: "calendar", component: CalendarComponent},
  // {path: "pricing", component: PricingComponent},
  // {path: "about", component: ContentBlockComponent},
  // {path: "contact", component: ContactComponent},
  // {path: "terms-of-service", component: TermsOfServiceComponent},
  // {path: "privacy-policy", component: PrivacyPolicyComponent},
  // {path: "forgot-password", component: ForgotPasswordComponent},
  // {path: "dashboard", component: DashboardComponent},
  // {path: "pricing", component: PricingComponent},
  // {path: "sign up", component: SignupPageComponent},

  // redirects
  {path: "home", redirectTo: ""},

  // protected paths
  // {path: "settings", component: UserSettingsComponent, ...canActivate(redirectUnauthorizedToLogin)},
  // {path: "ty-ilysm-confirmation", component: MonthlyConfirmationComponent, ...canActivate(redirectUnauthorizedToLogin)},
  // {path: "ty-ily", component: UserSettingsComponent, ...canActivate(redirectUnauthorizedToLogin)},

  //when user is logged in
  // {path: "pricing/dashboard", component: DashboardComponent, ...canActivate(redirectLoggedInToDashboard)},
  // {path: "about/dashboard", component: DashboardComponent, ...canActivate(redirectLoggedInToDashboard)},
  // {path: "contact/dashboard", component: DashboardComponent, ...canActivate(redirectLoggedInToDashboard)},
  // {path: "terms-of-service/dashboard", component: DashboardComponent, ...canActivate(redirectLoggedInToDashboard)},
  // {path: "privacy-policy/dashboard", component: DashboardComponent, ...canActivate(redirectLoggedInToDashboard)},


  // test paths
  // {path: "dashboard", component: DashboardComponent},

  // {path: "dashboard/my-form", component: CreateAdmissionFormComponent},
  // {path: "dashboard/manage-admissions", component: ManageAdmissionsComponent},
  // {path: "dashboard/settings", component: UserSettingsComponent},

  // {path: "items", component: PricingComponent, ...canActivate(redirectLoggedInToDashboard)},

  // page not found path
  // {path: "**", component: PageNotFoundComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
