import { Routes, RouterModule, CanActivate }       from '@angular/router';
import { HomeComponent }              from './components/home/home.component';
import { SignupComponent }            from './components/signup/signup.component';
import { AuthGuard }                  from './services/auth/AuthGuard';
import { ProfileComponent }           from './components/profile/profile.component';

const routes: Routes = [
  
  {path: '', 		redirectTo: '/home', 		pathMatch: 'full'},
  {path: 'home', 	component: HomeComponent},
  {path: 'signup', 	component: SignupComponent, data: { animation: 'tiger' }},
  {path: 'profile', 	component: ProfileComponent, canActivate: [AuthGuard]},

];

export const appRouterModule = RouterModule.forRoot(routes);