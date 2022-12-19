import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstDosageComponent } from './first-dosage/first-dosage.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SecondDosageComponent } from './second-dosage/second-dosage.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'firstDosage',
    component: FirstDosageComponent,
  },
  {
    path: 'secondDosage',
    component: SecondDosageComponent,
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent,
  },
  {
    path: 'registrationForm',
    component: RegistrationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
