import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PopupComponent } from './popup/popup.component';
import { DataService } from './data.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstDosageComponent } from './first-dosage/first-dosage.component';
import { SecondDosageComponent } from './second-dosage/second-dosage.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PopupComponent,
    FirstDosageComponent,
    SecondDosageComponent,
    ForgotPasswordComponent,
    RegistrationFormComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
