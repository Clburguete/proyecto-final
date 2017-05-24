import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { SessionService } from "./session.service";
import { FileSelectDirective } from "ng2-file-upload";
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    FileSelectDirective,
    LoginComponent,
    //AddPhoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
