import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/messages.service'
import { SessionService } from '../services/session.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  messageList:any;
  error:string;
  loggedUser:any;
  receiverId: any;

  constructor(public session: SessionService, private inbox : MessageService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.session.getLoginEmitter().subscribe(user => this.loggedUser=user)
    this.session.isLoggedIn().subscribe();
    this.route.params
      .subscribe((params)=>{
        this.receiverId = params['id'];
        this.inbox.showUserMessages(this.receiverId)
          .subscribe(
            response => {
              return this.messageList = response},
            err => this.error = err
          )

      });
  }
  delete(id){
    this.inbox.deleteMessage(id).subscribe((success)=>{
      this.inbox.showUserMessages(this.receiverId)
        .subscribe(
          response => {
            return this.messageList = response},
          err => this.error = err
        )
    })

  }

}
