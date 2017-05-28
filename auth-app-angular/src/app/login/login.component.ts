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
       role: '',
       //category:''
     };
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
             if(this.formInfo.role ==="investor"){
               this.router.navigate(['startups']);
             } else if(this.formInfo.role ==="startup"){
               this.router.navigate(['invboard'])
             }
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
       this.error = null;
     }
  }
