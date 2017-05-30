import { Component, OnInit } from '@angular/core';
import { SessionService } from './services/session.service';
import { Router } from '@angular/router';
import { MessageService } from './services/messages.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loggedUser:any;
  error:any;
  userMessages: any;

  constructor(public messages: MessageService, public session: SessionService, public router: Router) { }

   ngOnInit() {
      this.session.getLoginEmitter().subscribe( user => {
        this.loggedUser=user;
        console.log(this.loggedUser);
        this.messages.showMessages(this.loggedUser._id).subscribe(
          message => {
            console.log("MESSAGEs",message);

            return this.userMessages = message;
          })

      })
      this.session.isLoggedIn().subscribe(user => {
        this.loggedUser=user;

        console.log(this.loggedUser)

      });


   }
   logout() {
     this.session.logout()
     .subscribe(
       () => {
         this.successCb(null);
         this.router.navigate(['']);
       },
       (err) => this.errorCb(err)
     );
   }
   islogged(){
     this.session.isLoggedIn().subscribe(user => console.log(user));
   }
   errorCb(err) {
     this.error = err;
     this.loggedUser = null;
   }

   successCb(user) {
     this.loggedUser = user;
     this.error = null;
   }

}
