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
import { ProfileComponent } from './components/profile/profile.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { CentralComponent } from './components/central/central.component';
import { CountdownComponent } from './components/countdown/countdown.component';
import { AllergyComponent } from './components/allergy/allergy.component';
import { AllergyService } from './services/allergy/allergy.service';
import { UserService } from './services/user/user.service';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmPresenceComponent } from './components/confirm-presence/confirm-presence.component';
import { InvitationComponent } from './components/invitation/invitation.component';
import { BusComponent } from './components/bus/bus.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    ProfileComponent,
    NavigationComponent,
    CentralComponent,
    CountdownComponent,
    AllergyComponent,
    FooterComponent,
    ConfirmPresenceComponent,
    InvitationComponent,
    BusComponent
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
    AuthGuard,
    AllergyService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
