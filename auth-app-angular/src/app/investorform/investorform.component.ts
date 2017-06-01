import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SessionService } from '../services/session.service';
import { DatasheetsService } from '../services/datasheets.service'
import { Router } from '@angular/router';

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
  isDisabled: boolean;
  error: string;
  data: any;

  constructor(public session: SessionService, private dataService: DatasheetsService,private router: Router) { }

  ngOnInit() {
    this.session.isLoggedIn().subscribe(user => {
      this.loggedUser = user;
    });

  }

  create() {
    this.dataService.investmentCreate(this.InvestorForm, this.loggedUser._id)
      .subscribe(
      (data) => {
        return this.successCb(data)},
      (err) => this.errorCb(err)
      )
  }

  errorCb(err) {
    this.error = err;
    this.data = null;
  }

  successCb(data) {
    this.data = data;
    this.error = null;

  }
}
