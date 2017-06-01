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
  error: any;
  userMessages: any;
  loggedUser: any;
  constructor(public messages: MessageService, public session: SessionService, public router: Router) { }

  ngOnInit() {
    this.session.getLoginEmitter().subscribe(user => {
      this.loggedUser = user;
      this.showUserMessages()
    })
      // this.session.isLoggedIn().subscribe(user => {
      //   this.loggedUser = user;
      // });

      this.messages.messageEvent.subscribe(messages => this.userMessages = messages)

  }

  showUserMessages() {
    if(!this.loggedUser) return;
    console.log("User Logged in, getting messages....")
    this.messages.showUserMessages(this.loggedUser._id).subscribe(
      message => {
        return this.userMessages = message;
      });
  }

  logout() {
    this.session.logout().subscribe();
    this.router.navigate(['']);
  }
}
