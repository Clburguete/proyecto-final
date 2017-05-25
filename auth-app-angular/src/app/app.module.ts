import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SessionService } from "./session.service";
import { FileSelectDirective } from "ng2-file-upload";
import { MaterializeModule } from 'angular2-materialize';
import { Paths } from './route-paths';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';





@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(Paths)
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
