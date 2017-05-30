import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-startupdetail',
  templateUrl: './startupdetail.component.html',
  styleUrls: ['./startupdetail.component.css']
})
export class StartupdetailComponent implements OnInit {
  startupId: string;
  error:any;
  loggedUser:any;
  startup:any;

  constructor(private route: ActivatedRoute, public business: UserService, public session: SessionService) { }

  ngOnInit() {
    this.loggedUser = this.session.loggedUser;

    this.route.params
     .subscribe((params) => {
       this.startupId = params['id'];
       this.business.showOne(this.startupId)
                   .subscribe(
                     (response) => {this.successCb(response)},
                     (err) => {this.errorCb(err)}
                   )
   });

  }
  errorCb(err) {
    this.error = err;
    this.startup = null;
  }

  successCb(startup) {
    this.startup = startup;
    console.log("Startup-->",this.startup)
    this.error = null;
  }

}
