import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FileSelectDirective } from "ng2-file-upload";
import { MaterializeModule } from 'angular2-materialize';
import { Paths } from './route-paths';
import { RouterModule, Routes } from '@angular/router';

import { SessionService } from "./services/session.service";
import { UserService } from "./services/user.service";
import { StartupService } from "./services/startup.service";

import { CapitalizePipe } from './pipes/capitalize.pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InvestorsComponent } from './investors/investors.component';
import { SingleInvestorComponent } from './single-investor/single-investor.component';
import { InvestordetailComponent } from './investordetail/investordetail.component';
import { StartupComponent } from './startups/startups.component';
import { SingleStartupComponent } from './single-startup/single-startup.component';
import { StartupdetailComponent } from './startupdetail/startupdetail';
import { InvestorDashboardComponent } from './investor-dashboard/investor-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    CapitalizePipe,
    LoginComponent,
    SignupComponent,
    InvestorsComponent,
    SingleInvestorComponent,
    InvestordetailComponent,
    StartupComponent,
    SingleStartupComponent,
    StartupdetailComponent,
    InvestorDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Paths)
  ],
  providers: [
    SessionService,
    UserService,
    StartupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
