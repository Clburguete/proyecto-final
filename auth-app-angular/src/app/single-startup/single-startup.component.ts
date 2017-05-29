import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';



@Component({
  selector: 'single-startup',
  templateUrl: './single-startup.component.html',
  styleUrls: ['./single-startup.component.css']
})
export class SingleStartupComponent implements OnInit {
  @Input() startup: any;
  loggedUser: any;

  constructor(public session: SessionService) { }

  ngOnInit() {
    this.loggedUser = this.session.loggedUser;
  }

}
