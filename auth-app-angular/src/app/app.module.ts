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



import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InvestorsComponent } from './investors/investors.component';
import { SingleInvestorComponent } from './single-investor/single-investor.component';

import { CapitalizePipe } from './pipes/capitalize.pipe';






@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    CapitalizePipe,
    LoginComponent,
    SignupComponent,
    InvestorsComponent,
    SingleInvestorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Paths)
  ],
  providers: [
    SessionService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
