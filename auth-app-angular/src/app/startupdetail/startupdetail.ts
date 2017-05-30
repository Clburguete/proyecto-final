import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StartupService } from '../services/startup.service';
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

  constructor(private route: ActivatedRoute, public startup: StartupService, public session: SessionService) { }

  ngOnInit() {
    this.loggedUser = this.session.loggedUser;

    this.route.params
     .subscribe((params) => {
       this.startupId = params['id'];
       this.startup.showOne(this.startupId)
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
    this.error = null;
  }

}
