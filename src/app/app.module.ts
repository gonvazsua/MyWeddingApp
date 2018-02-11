import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

//Local imports
import { environment } from './../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { RouterModule, Routes} from '@angular/router';
import { appRouterModule } from "./app.routes";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AuthGuard } from './services/auth/AuthGuard';

//Services
import { AuthService } from './services/auth/auth.service';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { SecretComponent } from './components/secret/secret.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { AllergiesComponent } from './components/allergies/allergies.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    SecretComponent,
    ProfileComponent,
    NavigationComponent,
    TimelineComponent,
    AllergiesComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AngularFontAwesomeModule
  ],
  providers: [
  	AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
