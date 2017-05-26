import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

    user: any;
     formInfo = {
       username: '',
       password: '',
       role: '',
       //category:''
     };
     error: string;
     privateData: any = '';
     selectOptions = [];

    constructor(private session: SessionService,private router: Router) { }

     ngOnInit() {

      //  this.session.isLoggedIn()
      //    .subscribe(
      //      (user) => this.successCb(user)
      //    );
     }



     signup() {
       console.log(this.formInfo);
       this.session.signup(this.formInfo)
         .subscribe(
           (user) => {this.successCb(user),this.router.navigate([''])},
           (err) => this.errorCb(err)
         );
     }

     errorCb(err) {
       this.error = err;
       this.user = null;
     }

     successCb(user) {
       this.user = user;
       this.error = null;
     }
  }
