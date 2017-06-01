import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service'
import { SessionService } from '../services/session.service'

@Component({
  selector: 'app-startups',
  templateUrl: './startups.component.html',
  styleUrls: ['./startups.component.css']
})
export class StartupComponent implements OnInit {
  startupList: any[];
  error: string;
  user: any;

  constructor(public startups: UserService, public session: SessionService) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe( user => {
      console.log(user);
      this.user = user;
    });


    this.startups.showAll()
      .subscribe(
        (response) => this.successCb(response),
        (err) => this.errorCb(err)
      );
  }

  errorCb(err) {
    this.error = err;
    this.startupList = [null];
  }

  successCb(list) {
    this.startupList = list;
    this.error = null;
  }
}
