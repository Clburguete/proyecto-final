import { Component, OnInit } from '@angular/core';
import { SessionService } from '../services/session.service';
import { MessageService } from '../services/messages.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {
  loggedUser:any;
  data:any;
  error: string;
  receiver:any;

  content:string;

  receiverId:any;
  constructor(public userService: UserService, private route: ActivatedRoute,public session: SessionService, private messaging: MessageService,private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe(user => {
      this.loggedUser = user;
    });
    this.loggedUser = this.session.loggedUser

    this.route.params
      .subscribe((params)=>{
        this.receiverId = params['id'];
        this.userService.showOne(this.receiverId)
         .subscribe(
           (response) => this.successUserCb(response),
           (err) => this.errorUserCb(err)
         )
      })
  }

  create(){
    console.log("creating...")
    let newMessage = {
      to: this.receiverId,
      from: this.loggedUser._id,
      content: this.content
    }
    this.messaging.createMessage(newMessage)
        .subscribe()
}
errorCb(err) {
  this.error = err;
  this.data = null;
}

successCb(data) {
  this.data = data;
  this.error = null;
}
errorUserCb(err) {
  this.error = err;
  this.receiver = null;
}

successUserCb(data) {
  this.receiver = data;
  this.error = null;
}
}
