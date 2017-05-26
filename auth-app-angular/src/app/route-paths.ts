import { Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InvestorsComponent } from './investors/investors.component';


export const Paths: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'investors', component: InvestorsComponent},

];
