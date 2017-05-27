import { Component, OnInit } from '@angular/core';
import { StartupService } from '../services/startup.service'
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
  constructor(private startups : StartupService, private session: SessionService) { }

  ngOnInit() {
    this.user=this.session.user



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
