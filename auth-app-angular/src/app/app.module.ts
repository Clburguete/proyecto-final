import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule } from 'angular2-materialize';
import { Paths } from './route-paths';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { SessionService } from "./services/session.service";
import { UserService } from "./services/user.service";
import { DatasheetsService} from "./services/datasheets.service"
import { MessageService} from "./services/messages.service"

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
import { EditinvestorComponent } from './editinvestor/editinvestor.component';
import { InvestorformComponent } from './investorform/investorform.component';
import { StartupformComponent } from './startupform/startupform.component';
import { NewMessageComponent } from './new-message/new-message.component';
import { InboxComponent } from './inbox/inbox.component';
import { HomeComponent } from './home/home.component';
import { EditstartupComponent } from './editstartup/editstartup.component';



@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    LoginComponent,
    SignupComponent,
    InvestorsComponent,
    SingleInvestorComponent,
    InvestordetailComponent,
    StartupComponent,
    SingleStartupComponent,
    StartupdetailComponent,
    InvestorDashboardComponent,
    EditinvestorComponent,
    InvestorformComponent,
    StartupformComponent,
    NewMessageComponent,
    InboxComponent,
    HomeComponent,
    EditstartupComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Paths),
    ChartsModule
  ],
  providers: [
    SessionService,
    UserService,
    DatasheetsService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
