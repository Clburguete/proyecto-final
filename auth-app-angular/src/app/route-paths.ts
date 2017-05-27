import { Routes } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InvestorsComponent } from './investors/investors.component';
import { InvestordetailComponent } from './investordetail/investordetail.component'
import { StartupComponent } from './startups/startups.component';
import { StartupdetailComponent } from './startupdetail/startupdetail';
import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component'
import { EditinvestorComponent } from './editinvestor/editinvestor.component'


export const Paths: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'signup',  component: SignupComponent },
  { path: 'investors', component: InvestorsComponent},
  { path: 'investors/:id', component: InvestordetailComponent},
  { path: 'investors/:id/edit', component: EditinvestorComponent},
  { path: 'startups', component: StartupComponent},
  { path: 'startups/:id', component: StartupdetailComponent},
  { path: 'invboard', component: InvestorDashboardComponent}



];
