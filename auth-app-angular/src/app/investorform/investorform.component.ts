import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';
import { DatasheetsService } from '../services/datasheets.service'

@Component({
  selector: 'app-investorform',
  templateUrl: './investorform.component.html',
  styleUrls: ['./investorform.component.css']
})
export class InvestorformComponent implements OnInit {

  loggedUser: any;
  InvestorForm = {
    connections: '',
    interests: '',
    budget: '',
    investreturn: ''
  };
  error: string;
  constructor(private session: SessionService, private router: Router, private data: DatasheetsService) { }

  ngOnInit() {
    // this.session.getLoginEmitter().subscribe(user => this.loggedUser=user)
    // this.session.isLoggedIn().subscribe();
    this.loggedUser = this.session.loggedUser;

  }

  create() {
    //this.session.isLoggedIn().subscribe(res=>console.log(res))
    this.data.createInvestForm(this.InvestorForm)
      .subscribe(
      (data) => this.successCb(data),
      (err) => this.errorCb(err)
      )
  }
  errorCb(err) {
    console.log(err);
    this.error = err;
    this.data = null;
  }

  successCb(data) {
    console.log("Data", data)
    this.data = data;
    this.error = null;

  }
}
