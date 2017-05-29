import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'single-investor',
  templateUrl: './single-investor.component.html',
  styleUrls: ['./single-investor.component.css']
})
export class SingleInvestorComponent implements OnInit {
  @Input() investor: any;
  loggedUser: any;

  constructor(public router: Router, public session: SessionService) { }

  ngOnInit() {
    this.loggedUser = this.session.loggedUser;
  }

}
