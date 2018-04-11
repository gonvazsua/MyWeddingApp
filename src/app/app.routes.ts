import { Routes, RouterModule, CanActivate }       from '@angular/router';
import { HomeComponent }              from './components/home/home.component';
import { SignupComponent }            from './components/signup/signup.component';
import { AuthGuard }                  from './services/auth/AuthGuard';
import { ProfileComponent }           from './components/profile/profile.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AdminComponent } from './components/admin/admin/admin.component';

const routes: Routes = [
  
  {path: 'home', 	component: HomeComponent},
  {path: 'signup', 	component: SignupComponent},
  {path: 'profile', 	component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'hotels', component: HotelComponent, canActivate: [AuthGuard]},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard]},
  {path: '**', 		component: HomeComponent}
];

export const appRouterModule = RouterModule.forRoot(routes);