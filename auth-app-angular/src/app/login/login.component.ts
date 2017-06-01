import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    user: any;
     formInfo = {
       username: '',
       password: '',

     };
     isDisabled: boolean;

     error: string;

    constructor(private session: SessionService,private router: Router) { }

     ngOnInit() {
      //  this.session.isLoggedIn().subscribe();
       this.session.getLoginEmitter().subscribe(user => this.user=user)

     }

     login() {
       this.session.login(this.formInfo)
         .subscribe(
           (user) => {
             this.successCb(user);

           },
           (err) => this.errorCb(err)
         );
     }

     errorCb(err) {
       this.error = err;
       this.user = null;
     }

     successCb(user) {
       this.user = user;
       if(this.user.role ==="investor"){
         this.router.navigate(['startups']);
       } else if(this.user.role ==="startup"){
         this.router.navigate(['investors'])
       }
       this.error = null;
     }
  }
